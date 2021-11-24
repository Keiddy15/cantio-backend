const promocionService = require('./promocion.service')
const jwt = require("jsonwebtoken")

const promocionController = {}

promocionController.crearPromocion = async (req, res) =>  {
    try {
        const crearPromocion = await promocionService.crearPromocion(req.body)
        return res.status(200).json('Código de promoción creado')
    } catch (error) {
        return res.send(error)
    }
}

promocionController.editarPromocion = async (req, res) =>  {
    try {
        const editarPromocion = await promocionService.editarPromocion(req.body)
        return res.status(200).json('Código de promoción editado')
    } catch (error) {
        return res.send(error)
    }
}

promocionController.eliminarPromocion = async (req, res) =>  {
    try {
        const eliminarPromocion = await promocionService.eliminarPromocion(req.body.id)
        return res.status(200).json('Código de promoción eliminado')
    } catch (error) {
        return res.send(error)
    }
}

promocionController.obtenerPromocion = async (req, res) =>  {
    try {
        const obtenerPromocion = await promocionService.obtenerPromocion(req.body.id)
        return res.status(200).json(obtenerPromocion)
    } catch (error) {
        return res.send(error)
    }
}


module.exports = promocionController;