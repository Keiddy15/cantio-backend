const cancionesService = require('./canciones.service')
const usuarioService = require('../usuario/usuario.service')
const request = require("request");
const nodemailerService = require('../nodemailer/nodemailer.service')

const cancionesController = {}

cancionesController.obtenerNombres = async (req, res) =>  {
    try {
        const obtenerNombres = await cancionesService.obtenerNombres()
        return res.status(200).json(obtenerNombres)
    } catch (error) {
        res.send(error)
    }
}

cancionesController.reproducirCancion = async (req, res) =>  {
    try {
        let options = { 
            method: 'POST',
            url: 'https://st-cantio.devout.cc/',
            headers:
            { 
                'Cache-Control': 'no-cache',
                'Content-Type': 'multipart/form-data' 
            },
            formData: { 
                token_n: 'fQViD^trC6L*shivlCPneIiI0zDK9Aajc3H5mEU',
                name: req.body.nombre,
                song: req.body.cancion,
                Preview: req.body.preview
            } 
        };
        request(options, function (error, response, body) {
            if (error) throw new Error(error);
            return res.status(200).json(response.body)
        });
    } catch (error) {
        res.send(error)
    }
}

cancionesController.obtenerUsuariosCancionesPorId = async (req, res) =>  {
    try {
        const canciones = await cancionesService.obtenerUsuariosCancionesPorId(req.params.id)
        return res.status(200).json(canciones)
    } catch (error) {
        return res.send(error)
    }
}

cancionesController.obtenerUsuariosCancionesParaRegalarPorId = async (req, res) =>  {
    try {
        const canciones = await cancionesService.obtenerUsuariosCancionesParaRegalarPorId(req.params.id)
        return res.status(200).json(canciones)
    } catch (error) {
        return res.send(error)
    }
}

cancionesController.regalarCanciones = async (req, res) =>  {
    try {
        const validarExistenciaUsuario = await usuarioService.buscarUsuarioPorCorreo(req.body.email)
        let idUsuario;
        let pass = '';
        if(validarExistenciaUsuario.length == 0) {
            pass = Math.random().toString(36).slice(-8);
            const encriptarContraseña = await usuarioService.encriptarContraseña(pass)
            const usuario = {
                nombre: req.body.nombre,
                email: req.body.email,
                contraseña: encriptarContraseña
            }
            const nuevoUsuario =  await usuarioService.crearUsuario(usuario)
            const nuevoUsuarioID = await usuarioService.buscarUsuarioPorCorreo(req.body.email)
            idUsuario = nuevoUsuarioID[0].id
        }else {
            idUsuario = validarExistenciaUsuario[0].id
        }
        let canciones = {
            idUsuario: idUsuario,
            nombre: req.body.nombreNino,
            cancion: req.body.cancion,
            idCancion: req.body.idCancion,
            estado: true
        }
        const cancionRegalo = await cancionesService.editarCancionRegalo(canciones)
        //Enviar correo
        const email = await nodemailerService.correoRegalo(req.body.nombre, req.body.nombreRegalador, req.body.email, pass)
        return res.status(200).json("Regalo enviado")
    } catch (error) {
        res.send(error)
    }
}
module.exports = cancionesController;
