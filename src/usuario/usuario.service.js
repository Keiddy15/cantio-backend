const pool = require("../database");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")

const usuarioService = {}

usuarioService.buscarUsuarioPorCorreo = async (email) => { 
    const usuario = await pool.query(
        "SELECT id, nombre, email, rol FROM usuario WHERE email =?",
        email
    );
    return usuario
}

usuarioService.buscarUsuarioPorCorreoConContraseña = async (email) => { 
    const usuario = await pool.query(
        "SELECT * FROM usuario WHERE email =?",
        email
    );
    return usuario
}

usuarioService.encriptarContraseña = async (contrasena) => {
    const jump = await bcrypt.genSalt(10);
    const pass = contrasena;
    const password = await bcrypt.hash(pass, jump);
    return password
} 

usuarioService.crearUsuario = async (usuario) => {
    const nuevoUsuario = await pool.query(
        "INSERT INTO usuario SET ?", 
        usuario
    )
    return nuevoUsuario
}

usuarioService.compararContraseña = async (contrasenaUsuario, contrasenaBD) => {
    const compararContraseña = await bcrypt.compare(contrasenaUsuario, contrasenaBD)
    return compararContraseña
}

usuarioService.crearToken = async (email) => {
    const token = jwt.sign({ email }, 'TOKEN_SECRET_USUARIO')
    return token
}

usuarioService.editarUsuario = async (usuario) => {
    const editarUsuario = await pool.query(`UPDATE usuario SET ?  WHERE id = ${usuario.id}`, usuario)
    return editarUsuario
}

module.exports = usuarioService;