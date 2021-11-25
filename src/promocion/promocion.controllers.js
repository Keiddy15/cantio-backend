const promocionService = require('./promocion.service')

const promocionController = {}

promocionController.crearPromocion = async (req, res) =>  {
    try {
        const existeCodigo = await promocionService.existeCodigo(req.body.codigoPromocional)
        if(existeCodigo.length > 0) {
            return res.status(404).json('Ya este código exite')
        }
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