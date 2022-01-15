const transporter = require('./nodemailer.controllers')
const email = require('./email')
const regalo = require('./regalo')

const nodemailerService = {}

nodemailerService.correoConfirmacionPago = async (emailUsuario, pass) => {
    try {
        await transporter.sendMail({
            from: '"Cantío" <infocantio@gmail.com>',
            to: emailUsuario,
            subject: "Ha llegado la música",
            html: email.correoConfirmacionPago(emailUsuario, pass)
        })
    } catch (error) {
        console.log(error)
        return error
    }
}

nodemailerService.correoRegalo = async (nombre, nombreRegalador, email, pass) => {
    try {
        await transporter.sendMail({
            from: '"Cantío" <infocantio@gmail.com>',
            to: email,
            subject: "Ha llegado la música",
            html: regalo.enviarEmailRegalo(nombre, nombreRegalador, email, pass)
        })
    } catch (error) {
        console.log(error)
        return error
    }
}

module.exports = nodemailerService