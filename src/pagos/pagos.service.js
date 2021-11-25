const pool = require("../database");

const pagosService = {}

pagosService.guardarInformacionPago = async (pago) => {
    try {
        let informacionPago = {
            estado: pago.state_pol,
            referenciaVenta: pago.reference_sale,
            referenciaPayU: pago.reference_pol,
            firma: pago.sign,
            descripcion: pago.extra1,
            metodoPago: pago.payment_method,
            valor: pago.value,
            fechaTransaccion: pago.transaction_date,
            moneda: pago.currency,
            emailComprador: pago.email_buyer,
            cusPSE: pago.cus,
            idTransaccion: pago.account_number_ach,
            fechaOperacion: pago.date,
            nombreVendedor: pago.nickname_buyer
        }
        const guardarPago = await pool.query(
            'INSERT INTO pagos SET ?',
            informacionPago
        )
        return guardarPago
    } catch (error) {
        return error
    }
}

module.exports = pagosService;