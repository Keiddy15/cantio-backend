const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: "keiddygarcia@gmail.com",
        pass: "HOLYSHIT"
    }
})

transporter.verify().then(() => {
    console.log("Ready for sent email")
})

module.exports = transporter