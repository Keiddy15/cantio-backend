const pool = require("../database");

const variablesService = {}

variablesService.editarVariables = async (variables) => {
    try {
        const editarVariables = await pool.query(
            `UPDATE variables SET ?  WHERE id = ${variables.id}`, 
            variables
        )
        return editarVariables
    } catch (error) {
        return error
    }
}

variablesService.obtenerVariables = async () => {
    try {
        const obtenerPromocion = await pool.query(
            `SELECT * FROM variables`
        )
        return obtenerPromocion
    } catch (error) {
        return error
    }
}

module.exports = variablesService;