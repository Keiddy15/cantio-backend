const pool = require("../database");

const promocionService = {}

promocionService.crearPromocion = async (promo) => {
    try {
        const promocion = await pool.query(
            'INSERT INTO promociones SET ?', 
            promo
        )
        return promocion
    } catch (error) {
        return error
    }
}

promocionService.editarPromocion = async (prom) => {
    try {
        const editarPromocion = await pool.query(
            `UPDATE promociones SET ?  WHERE id = ${prom.id}`, 
            prom
        )
        return editarPromocion
    } catch (error) {
        return error
    }
},

promocionService.eliminarPromocion = async (id) => {
    try {
        const eliminarPromocion = await pool.query(
            `DELETE FROM promociones WHERE id = ${id}`
        )
        return eliminarPromocion
    } catch (error) {
        return error
    }
}

promocionService.obtenerPromocion = async (id) => {
    try {
        const obtenerPromocion = await pool.query(
            `SELECT * FROM promociones`
        )
        return obtenerPromocion
    } catch (error) {
        return error
    }
}

module.exports = promocionService;