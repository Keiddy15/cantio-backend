const transporter = require('./nodemailer.controllers')
const email = require('./email')

const nodemailerService = {}

nodemailerService.correoConfirmaciónPago = async (email, pass) => {
    try {
        await transporter.sendMail({
            from: '"Cantío" <infocantio@gmail.com>',
            to: email,
            subject: "Ha llegado la música",
            html: email.correoConfirmaciónPago(email, pass)
        })
    } catch (error) {
        return error
    }
}

module.exports = nodemailerService