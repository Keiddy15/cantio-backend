const cancionesService = require('./canciones.service')
const jwt = require("jsonwebtoken")

const cancionesController = {}

cancionesController.obtenerNombres = async (req, res) =>  {
    try {
        const obtenerNombres = await cancionesService.obtenerNombres()
        return res.status(200).json(obtenerNombres)
    } catch (error) {
        res.send(error)
    }
}

module.exports = cancionesController;
