const pagosService = require('./pagos.service')
const cancionesService = require('../canciones/canciones.service')
const usuarioService = require('../usuario/usuario.service')

const pagosController = {}

pagosController.guardarInformacionPago = async (req, res) => {
    try {
        //Guardando información del pago
        const guardarInformacionPago = await pagosService.guardarInformacionPago(req.body)
        
        //Ver estado transacción
        const estado = await pagosService.estadoPago(req.body.state_pol)

        if (estado) {
            //Estado aprobado

            //Creando constante para traer la descripción de la compra
            const descripcionCompra = JSON.parse(req.body.extra1.desc)

            //Creando constante para tener el correo del comprador
            const emailComprador = req.body.buyerEmail

            //Si el correo del producto viene null, haciendo un mapeo para colocar el correo del comprador
            const emailCanciones = descripcionCompra.map(item =>{
                let email = item.e == null ? emailComprador:item.e
                return { n:item.n, c:item.c, e:email }
            })
            
            //Creando variable para saber si el correo existe
            let correo = ''

            //Validar si el correo existe en la BD

            for (const element of emailCanciones) {
                correo = await usuarioService.buscarUsuarioPorCorreo(element.e)
                if (correo.length > 0) {
                    //INSERT en la tabla que relaciona a los usuarios con las canciones que tiene
                    const canciones = {
                        idUsuario: correo[0].id,
                        nombre: element.n,
                        cancion: element.c == null ? 'ALBUM' : element.c
                    }
                    const usuarioCanciones = await cancionesService.usuariosCanciones(canciones)

                    //Enviar correo con el paso a seguir
                    console.log('Enviando correo')

                } else {
                    //Crear un usuario
                    const pass = Math. random().toString(36).slice(-8);
                    const encriptarContraseña = await usuarioService.encriptarContraseña(pass)
                    const usuario = {
                        nombre: element.e,
                        email: element.e,
                        contraseña: encriptarContraseña
                    }
                    const nuevoUsuario =  await usuarioService.crearUsuario(usuario)

                    //Buscar usuario creado para obtener el id
                    const nuevoUsuarioID = await usuarioService.buscarUsuarioPorCorreo(element.e)

                    //INSERT en la tabla que relaciona a los usuarios con las canciones que tiene
                    const canciones = {
                        idUsuario: nuevoUsuarioID[0].id,
                        nombre: element.n,
                        cancion: element.c == null ? 'ALBUM' : element.c
                    }
                    const usuarioCanciones = await cancionesService.usuariosCanciones(canciones)

                    //Enviar correo con el paso a seguir
                    console.log('Enviando correo')
                }
            }
            res.status(200).json('Proceso finalizado')
        } else {
            //Estado declinado
            res.status(200).json('Transacción no aceptada')
        }
    } catch (error) {
        console.log(error)
        res.send(error)
    }
}

module.exports = pagosController