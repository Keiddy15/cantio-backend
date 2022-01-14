const pool = require("../database");

const cancionesService = {}

cancionesService.obtenerNombres = async () => {
    try {
        const obtenerNombres = await pool.query(
            'SELECT * FROM nombres'
        )
        return obtenerNombres
    } catch (error) {
        return error
    }
}

cancionesService.usuariosCanciones = async (canciones) => {
    try {
        const usuariosCanciones = await pool.query(
            'INSERT INTO usuarioCanciones SET ?',
            canciones
        )
        return usuariosCanciones
    } catch (error) {
        return error
    }
}

cancionesService.obtenerUsuariosCancionesPorId = async (id) => {
    try {
        const canciones = await pool.query(
            `SELECT * FROM usuarioCanciones WHERE idUsuario = ? AND estado = ${true}`,
            id
        )
        return canciones
    } catch (error) {
        return error
    }
}


module.exports = cancionesService;