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

module.exports = cancionesService;