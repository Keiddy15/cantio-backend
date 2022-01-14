const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: "infocantio@gmail.com",
        pass: "Cantio2021"
    }
})

transporter.verify().then(() => {
    console.log("Ready for sent email")
})

module.exports = transporter