const pagossService = require('./pagos.service')
const md5 = require('blueimp-md5')
const request = require("request");

const pagosController = {}

pagosController.guardarInformacionPago = async (req, res) => {
    try {
        console.log(req.body)
        const guardarInformacionPago = await pagossService.guardarInformacionPago(req.body)
        console.log(guardarInformacionPago)
        res.status(200).json('Información de pago guardada')
    } catch (error) {
        console.log(error)
        res.send(error)
    }
}

module.exports = pagosController