const pool = require("../database");

const cancionesService = {}

cancionesService.obtenerNombres = async () => {
    const obtenerNombres = await pool.query(
        'SELECT * FROM nombres'
    )
    return obtenerNombres
}

module.exports = cancionesService;