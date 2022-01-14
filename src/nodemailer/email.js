const email = {}

email.correoConfirmacionPago = (email, pass) => {
    const emailHTML = `
        <!DOCTYPE html>
        <html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width,initial-scale=1">
            <meta name="x-apple-disable-message-reformatting">
            <title></title>
            <!--[if mso]>
            <noscript>
                <xml>
                    <o:OfficeDocumentSettings>
                        <o:PixelsPerInch>96</o:PixelsPerInch>
                    </o:OfficeDocumentSettings>
                </xml>
            </noscript>
            <![endif]-->
            <style>
                table, td, div, h1, p {font-family: Arial, sans-serif;}
            </style>
        </head>
        <body style="margin:0;padding:0;">
            <table role="presentation" style="width:100%;border-collapse:collapse;border:0;border-spacing:0;background:#ffffff;">
                <tr>
                    <td align="center" style="padding:0;">
                        <table role="presentation" style="width:602px;border-collapse:collapse;border-spacing:0;text-align:left; background: #ff514e;">
                            <tr>
                                <td align="center">
                                    <img src="https://i.ibb.co/nD2ZVDM/bird-b5a346dc.png" style="max-width: 230px;" border="0">
                                </td>
                            </tr>
                            <tr>
                                <td align="center" style="padding:40px 0 30px 0;">
                                    <h1 style="font-size:24px;margin:0 0 20px 0;font-family:Arial,sans-serif;color: #fff; text-align: center;">Hola, ha llegado la música</h1>
                                    <p style="color: #fff; text-align:center; font-size: 20px;">
                                        Si ya tienes una cuenta ingresa con tus datos. <br>
                                        Si no utiliza los siguientes datos para iniciar sesión: <br>
                                        email: <a href="" style="font-family:Arial,sans-serif;color: #fff; text-decoration: none;">${email}</a><br>
                                        pass: ${pass} <br>
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding:36px 30px 42px 30px;">
                                    <table role="presentation" style="width:100%;border-collapse:collapse;border:0;border-spacing:0;">
                                        <tr>
                                            <td style="padding:0 0 36px 0;color:#fff;">
                                                <h1 style="font-size:24px;margin:0 0 20px 0;font-family:Arial,sans-serif; font-size: 40px; line-height: 50px;">
                                                    PASOS A SEGUIR:
                                                </h1>
                                                <p style="margin:0 0 12px 0;font-size:16px;line-height:24px;font-family:Arial,sans-serif;">
                                                    1. Ir a <a href="https://cantio.co" style="font-family:Arial,sans-serif;color: #fff; text-decoration: none;">cantio.co</a> <br>
                                                    2. Inicia sesión con tus credenciales. <br>
                                                    3. En la parte superior dale click donde sale tu nombre. <br>
                                                    4. Ahí encontraras una pestaña llamada canciones, dirigite a ella y encontraras las canciones previamente compradas. <br>
                                                </p>
                                                <div style="margin-top: 3rem; text-align:center;">
                                                    <a href="https://cantio.co" style="font-size: 20px; font-family:Arial,sans-serif;color: #fff; text-decoration: none; background-color: #ffbd25; padding:15px; border-radius: 20px;">
                                                        Ir a Cantío
                                                    </a>
                                                </div>
                                                <p style="margin-top: 3rem">
                                                    Nota: Si compraste para regalar, ve a tu perfil -> regalos, e ingresa los datos del acudiente del niñ@ a quien le regalas canciones
                                                </p>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <td align="center" style="padding: 0; margin:0">
                                    <table style="background-color: rgb(23, 16, 32);" width="800" cellspacing="0" cellpadding="0" bgcolor="#0a0a0a" align="center">
                                        <tbody>
                                            <tr>
                                                <td align="left">
                                                    <table width="100%" cellspacing="0" cellpadding="0">
                                                        <tbody>
                                                            <tr>
                                                                <td width="520" valign="top" align="center">
                                                                    <table width="100%" cellspacing="0" cellpadding="0">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td align="center" >
                                                                                    <h5 style="color: #ffffff;"><a style="color: #ffffff; text-decoration: none;" href="https://cantio.co">© Todos los derechos reservados 2022<span data-cke-bookmark="1" style="display: none;">&nbsp;</span></a></h5>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </body>
    </html>
    `
    return emailHTML;
}

module.exports = email 