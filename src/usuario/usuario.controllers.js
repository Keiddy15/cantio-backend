const usuarioService = require('./usuario.service')
const jwt = require("jsonwebtoken")

const usuarioController = {}

usuarioController.registro = async (req, res) =>  {
    try {
        const existeCorreo = await usuarioService.buscarUsuarioPorCorreo(req.body.email)
        if(existeCorreo.length > 0) {
            return res.status(404).json("Este correo ya se encuentra registrado")
        }
        const encriptarContraseña = await usuarioService.encriptarContraseña(req.body.contrasena)
        const {
            nombre,
            email,
        } = req.body
        const usuario = {
            nombre,
            email,
            contraseña: encriptarContraseña
        }
        try {
            const nuevoUsuario =  await usuarioService.crearUsuario(usuario)
            const token = await usuarioService.crearToken(usuario.email)
            res.status(200)
            .json(token);
        } catch (error) {
            return res.send(error)
        }
    } catch (error) {
        return res.send(error)
    }
}

usuarioController.login = async (req, res) => {
    try {
        const usuario = await usuarioService.buscarUsuarioPorCorreoConContraseña(req.body.email)
        if(usuario.length == 0) {
            return res.status(404).json("Este correo no está registrado")
        }
        const compararContraseña = await usuarioService.compararContraseña(req.body.contraseña, usuario[0]['contraseña'])
        if(!compararContraseña) {
            return res.status(403).json("Credenciales incorrectas")
        }
        const token = await usuarioService.crearToken(usuario[0].email)
        res.status(200).json({token, rol: usuario[0].rol})
    } catch (error) {
        return res.send(error)
    }
} 

usuarioController.obtenerUsuarioPorToken = async (req, res) =>  {
    try {
        const token = jwt.verify(req.params.token, 'TOKEN_SECRET_USUARIO');
        if (!token) return res.status(404).send('Opps, hay en un error');
        const usuario = await usuarioService.buscarUsuarioPorCorreo(token.email)
        res.status(200).json(usuario)
    } catch (error) {
        res.send(error)
    }
}

usuarioController.editarUsuario = async (req, res) => {
    try {
        if(req.body.contraseña) {
            req.body.contraseña = await usuarioService.encriptarContraseña(req.body.contraseña)
        }
        const editarUsuario = await usuarioService.editarUsuario(req.body)
        res.status(200).json(editarUsuario)
    } catch (error) {
        res.send(error)
    }
}

module.exports = usuarioController;

