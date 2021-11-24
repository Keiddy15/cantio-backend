const variablesService = require('./variables.service')

const variablesController = {}

variablesController.editarVariables = async (req, res) => {
    try {
        const editarVariables = await variablesService.editarVariables(req.body)
        return res.status(200).json('Variables editadas')
    } catch (error) {
        return res.send(error)
    }
}
variablesController.obtenerVariables = async (req, res) => {
    try {
        const obtenerVariables = await variablesService.obtenerVariables()
        return res.status(200).json(obtenerVariables)
    } catch (error) {
        return res.send(error)
    }
}

module.exports = variablesController