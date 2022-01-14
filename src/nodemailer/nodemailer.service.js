const transporter = require('./nodemailer.controllers')
const email = require('./email')

const nodemailerService = {}

nodemailerService.correoConfirmacionPago = async (email, pass) => {
    try {
        await transporter.sendMail({
            from: '"Cantío" <infocantio@gmail.com>',
            to: email,
            subject: "Ha llegado la música",
            html: email.correoConfirmacionPago(email, pass)
        })
    } catch (error) {
        console.log(error)
        return error
    }
}

module.exports = nodemailerService