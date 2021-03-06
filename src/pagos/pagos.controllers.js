const pagosService = require('./pagos.service')
const cancionesService = require('../canciones/canciones.service')
const usuarioService = require('../usuario/usuario.service')
const nodemailerService = require('../nodemailer/nodemailer.service')

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
            const descripcionCompra = JSON.parse(req.body.extra1).desc

            //Creando constante para tener el correo del comprador
            const emailComprador = req.body.email_buyer

            const validarExistenciaUsuario = await usuarioService.buscarUsuarioPorCorreo(emailComprador)

            let idUsuario;
            let pass = "";

            if (validarExistenciaUsuario.length > 0) {
                idUsuario = validarExistenciaUsuario[0].id
            }else {
                //Crear un usuario
                pass = Math.random().toString(36).slice(-8);
                const encriptarContraseña = await usuarioService.encriptarContraseña(pass)
                const usuario = {
                    nombre: emailComprador,
                    email: emailComprador,
                    contraseña: encriptarContraseña
                }
                const nuevoUsuario =  await usuarioService.crearUsuario(usuario)
                const nuevoUsuarioID = await usuarioService.buscarUsuarioPorCorreo(emailComprador)
                idUsuario = nuevoUsuarioID[0].id
            }
            
            for (const key in descripcionCompra) {
                let e = descripcionCompra[key]
                let canciones = {
                    idUsuario: idUsuario,
                    nombre: e.n,
                    cancion: e.c == null ? 'ALBUM' : e.c
                }
                if(e.t == 'R') {
                    canciones.estado = false
                }else {
                    canciones.estado = true
                }
                const cancionesUsuario = await cancionesService.usuariosCanciones(canciones)
            }
            //Enviando correo
            const x = await nodemailerService.correoConfirmacionPago(emailComprador, pass)
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

pagosController.obtenerIdUltimoPago = async (req, res) =>  {
    try {
        const obtenerIdUltimoPago = await pagosService.obtenerIdUltimoPago()
        res.status(200).json(obtenerIdUltimoPago[0]['MAX(id)'])
    } catch (error) {
        return res.send(error)
    }
}

module.exports = pagosController