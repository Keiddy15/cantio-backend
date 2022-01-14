const email = {}

email.correoConfirmaciónPago = (email, pass) => {
    const emailHTML = `
        <!doctype html>
        <html ⚡4email data-css-strict>
        <head>
            <meta charset="utf-8">
            <style amp4email-boilerplate>
                body {
                    visibility: hidden
                }
            </style>
            <script async src="https://cdn.ampproject.org/v0.js"></script>
            <style amp-custom>
                .es-desk-hidden {
                    display: none;
                    float: left;
                    overflow: hidden;
                    width: 0;
                    max-height: 0;
                    line-height: 0;
                }
        
                s {
                    text-decoration: line-through;
                }
        
                body {
                    width: 100%;
                    font-family: helvetica, "helvetica neue", arial, verdana, sans-serif;
                }
        
                table {
                    border-collapse: collapse;
                    border-spacing: 0px;
                }
        
                table td,
                html,
                body,
                .es-wrapper {
                    padding: 0;
                    Margin: 0;
                }
        
                .es-content,
                .es-header,
                .es-footer {
                    table-layout: fixed;
                    width: 100%;
                }
        
                p,
                hr {
                    Margin: 0;
                }
        
                h1,
                h2,
                h3,
                h4,
                h5 {
                    Margin: 0;
                    line-height: 120%;
                    font-family: "trebuchet ms", "lucida grande", "lucida sans unicode", "lucida sans", tahoma, sans-serif;
                }
        
                .es-left {
                    float: left;
                }
        
                .es-right {
                    float: right;
                }
        
                .es-p5 {
                    padding: 5px;
                }
        
                .es-p5t {
                    padding-top: 5px;
                }
        
                .es-p5b {
                    padding-bottom: 5px;
                }
        
                .es-p5l {
                    padding-left: 5px;
                }
        
                .es-p5r {
                    padding-right: 5px;
                }
        
                .es-p10 {
                    padding: 10px;
                }
        
                .es-p10t {
                    padding-top: 10px;
                }
        
                .es-p10b {
                    padding-bottom: 10px;
                }
        
                .es-p10l {
                    padding-left: 10px;
                }
        
                .es-p10r {
                    padding-right: 10px;
                }
        
                .es-p15 {
                    padding: 15px;
                }
        
                .es-p15t {
                    padding-top: 15px;
                }
        
                .es-p15b {
                    padding-bottom: 15px;
                }
        
                .es-p15l {
                    padding-left: 15px;
                }
        
                .es-p15r {
                    padding-right: 15px;
                }
        
                .es-p20 {
                    padding: 20px;
                }
        
                .es-p20t {
                    padding-top: 20px;
                }
        
                .es-p20b {
                    padding-bottom: 20px;
                }
        
                .es-p20l {
                    padding-left: 20px;
                }
        
                .es-p20r {
                    padding-right: 20px;
                }
        
                .es-p25 {
                    padding: 25px;
                }
        
                .es-p25t {
                    padding-top: 25px;
                }
        
                .es-p25b {
                    padding-bottom: 25px;
                }
        
                .es-p25l {
                    padding-left: 25px;
                }
        
                .es-p25r {
                    padding-right: 25px;
                }
        
                .es-p30 {
                    padding: 30px;
                }
        
                .es-p30t {
                    padding-top: 30px;
                }
        
                .es-p30b {
                    padding-bottom: 30px;
                }
        
                .es-p30l {
                    padding-left: 30px;
                }
        
                .es-p30r {
                    padding-right: 30px;
                }
        
                .es-p35 {
                    padding: 35px;
                }
        
                .es-p35t {
                    padding-top: 35px;
                }
        
                .es-p35b {
                    padding-bottom: 35px;
                }
        
                .es-p35l {
                    padding-left: 35px;
                }
        
                .es-p35r {
                    padding-right: 35px;
                }
        
                .es-p40 {
                    padding: 40px;
                }
        
                .es-p40t {
                    padding-top: 40px;
                }
        
                .es-p40b {
                    padding-bottom: 40px;
                }
        
                .es-p40l {
                    padding-left: 40px;
                }
        
                .es-p40r {
                    padding-right: 40px;
                }
        
                .es-menu td {
                    border: 0;
                }
        
                a {
                    text-decoration: none;
                }
        
                p,
                ul li,
                ol li {
                    font-family: helvetica, "helvetica neue", arial, verdana, sans-serif;
                    line-height: 150%;
                }
        
                ul li,
                ol li {
                    Margin-bottom: 15px;
                }
        
                .es-menu td a {
                    text-decoration: none;
                    display: block;
                    font-family: helvetica, "helvetica neue", arial, verdana, sans-serif;
                }
        
                .es-menu amp-img,
                .es-button amp-img {
                    vertical-align: middle;
                }
        
                .es-wrapper {
                    width: 100%;
                    height: 100%;
                }
        
                .es-wrapper-color {
                    background-color: #F6F6F6;
                }
        
                .es-header {
                    background-color: transparent;
                }
        
                .es-header-body {
                    background-color: #FFFFFF;
                }
        
                .es-header-body p,
                .es-header-body ul li,
                .es-header-body ol li {
                    color: #333333;
                    font-size: 14px;
                }
        
                .es-header-body a {
                    color: #333333;
                    font-size: 14px;
                }
        
                .es-content-body {
                    background-color: #FFFFFF;
                }
        
                .es-content-body p,
                .es-content-body ul li,
                .es-content-body ol li {
                    color: #333333;
                    font-size: 14px;
                }
        
                .es-content-body a {
                    color: #F1C232;
                    font-size: 14px;
                }
        
                .es-footer {
                    background-color: transparent;
                }
        
                .es-footer-body {
                    background-color: transparent;
                }
        
                .es-footer-body p,
                .es-footer-body ul li,
                .es-footer-body ol li {
                    color: #666666;
                    font-size: 12px;
                }
        
                .es-footer-body a {
                    color: #666666;
                    font-size: 12px;
                }
        
                .es-infoblock,
                .es-infoblock p,
                .es-infoblock ul li,
                .es-infoblock ol li {
                    line-height: 120%;
                    font-size: 12px;
                    color: #CCCCCC;
                }
        
                .es-infoblock a {
                    font-size: 12px;
                    color: #CCCCCC;
                }
        
                h1 {
                    font-size: 36px;
                    font-style: normal;
                    font-weight: normal;
                    color: #333333;
                }
        
                h2 {
                    font-size: 22px;
                    font-style: normal;
                    font-weight: normal;
                    color: #333333;
                }
        
                h3 {
                    font-size: 18px;
                    font-style: normal;
                    font-weight: normal;
                    color: #333333;
                }
        
                .es-header-body h1 a,
                .es-content-body h1 a,
                .es-footer-body h1 a {
                    font-size: 36px;
                }
        
                .es-header-body h2 a,
                .es-content-body h2 a,
                .es-footer-body h2 a {
                    font-size: 22px;
                }
        
                .es-header-body h3 a,
                .es-content-body h3 a,
                .es-footer-body h3 a {
                    font-size: 18px;
                }
        
                a.es-button,
                button.es-button {
                    border-style: solid;
                    border-color: #FFE599;
                    border-width: 5px 15px 5px 15px;
                    display: inline-block;
                    background: #FFE599;
                    border-radius: 29px;
                    font-size: 14px;
                    font-family: "comic sans ms", "marker felt-thin", arial, sans-serif;
                    font-weight: normal;
                    font-style: normal;
                    line-height: 120%;
                    color: #333333;
                    text-decoration: none;
                    width: auto;
                    text-align: center;
                }
        
                .es-button-border {
                    border-style: solid solid solid solid;
                    border-color: transparent transparent transparent transparent;
                    background: #FFE599;
                    border-width: 0px 0px 0px 0px;
                    display: inline-block;
                    border-radius: 29px;
                    width: auto;
                }
        
                @media only screen and (max-width:600px) {
        
                    p,
                    ul li,
                    ol li,
                    a {
                        line-height: 150%
                    }
        
                    h1,
                    h2,
                    h3,
                    h1 a,
                    h2 a,
                    h3 a {
                        line-height: 120%
                    }
        
                    h1 {
                        font-size: 30px;
                        text-align: center
                    }
        
                    h2 {
                        font-size: 22px;
                        text-align: center
                    }
        
                    h3 {
                        font-size: 18px;
                        text-align: center
                    }
        
                    .es-header-body h1 a,
                    .es-content-body h1 a,
                    .es-footer-body h1 a {
                        font-size: 30px
                    }
        
                    .es-header-body h2 a,
                    .es-content-body h2 a,
                    .es-footer-body h2 a {
                        font-size: 22px
                    }
        
                    .es-header-body h3 a,
                    .es-content-body h3 a,
                    .es-footer-body h3 a {
                        font-size: 18px
                    }
        
                    .es-menu td a {
                        font-size: 18px
                    }
        
                    .es-header-body p,
                    .es-header-body ul li,
                    .es-header-body ol li,
                    .es-header-body a {
                        font-size: 14px
                    }
        
                    .es-content-body p,
                    .es-content-body ul li,
                    .es-content-body ol li,
                    .es-content-body a {
                        font-size: 16px
                    }
        
                    .es-footer-body p,
                    .es-footer-body ul li,
                    .es-footer-body ol li,
                    .es-footer-body a {
                        font-size: 14px
                    }
        
                    .es-infoblock p,
                    .es-infoblock ul li,
                    .es-infoblock ol li,
                    .es-infoblock a {
                        font-size: 12px
                    }
        
                    *[class="gmail-fix"] {
                        display: none
                    }
        
                    .es-m-txt-c,
                    .es-m-txt-c h1,
                    .es-m-txt-c h2,
                    .es-m-txt-c h3 {
                        text-align: center
                    }
        
                    .es-m-txt-r,
                    .es-m-txt-r h1,
                    .es-m-txt-r h2,
                    .es-m-txt-r h3 {
                        text-align: right
                    }
        
                    .es-m-txt-l,
                    .es-m-txt-l h1,
                    .es-m-txt-l h2,
                    .es-m-txt-l h3 {
                        text-align: left
                    }
        
                    .es-m-txt-r amp-img {
                        float: right
                    }
        
                    .es-m-txt-c amp-img {
                        margin: 0 auto
                    }
        
                    .es-m-txt-l amp-img {
                        float: left
                    }
        
                    .es-button-border {
                        display: inline-block
                    }
        
                    a.es-button,
                    button.es-button {
                        font-size: 16px;
                        display: inline-block
                    }
        
                    .es-btn-fw {
                        border-width: 10px 0px;
                        text-align: center
                    }
        
                    .es-adaptive table,
                    .es-btn-fw,
                    .es-btn-fw-brdr,
                    .es-left,
                    .es-right {
                        width: 100%
                    }
        
                    .es-content table,
                    .es-header table,
                    .es-footer table,
                    .es-content,
                    .es-footer,
                    .es-header {
                        width: 100%;
                        max-width: 600px
                    }
        
                    .es-adapt-td {
                        display: block;
                        width: 100%
                    }
        
                    .adapt-img {
                        width: 100%;
                        height: auto
                    }
        
                    td.es-m-p0 {
                        padding: 0px
                    }
        
                    td.es-m-p0r {
                        padding-right: 0px
                    }
        
                    td.es-m-p0l {
                        padding-left: 0px
                    }
        
                    td.es-m-p0t {
                        padding-top: 0px
                    }
        
                    td.es-m-p0b {
                        padding-bottom: 0
                    }
        
                    td.es-m-p20b {
                        padding-bottom: 20px
                    }
        
                    .es-mobile-hidden,
                    .es-hidden {
                        display: none
                    }
        
                    tr.es-desk-hidden,
                    td.es-desk-hidden,
                    table.es-desk-hidden {
                        width: auto;
                        overflow: visible;
                        float: none;
                        max-height: inherit;
                        line-height: inherit
                    }
        
                    tr.es-desk-hidden {
                        display: table-row
                    }
        
                    table.es-desk-hidden {
                        display: table
                    }
        
                    td.es-desk-menu-hidden {
                        display: table-cell
                    }
        
                    .es-menu td {
                        width: 1%
                    }
        
                    table.es-table-not-adapt,
                    .esd-block-html table {
                        width: auto
                    }
        
                    table.es-social {
                        display: inline-block
                    }
        
                    table.es-social td {
                        display: inline-block
                    }
                }
            </style>
        </head>
        
        <body>
            <div class="es-wrapper-color">
                <!--[if gte mso 9]><v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t"> <v:fill type="tile" color="#f6f6f6"></v:fill> </v:background><![endif]-->
                <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0">
                    <tr>
                        <td valign="top">
                            <table cellpadding="0" cellspacing="0" class="es-content" align="center">
                                <tr>
                                    <td class="es-adaptive" align="center">
                                        <table class="es-content-body" style="background-color: transparent" width="600"
                                            cellspacing="0" cellpadding="0" align="center">
                                            <tr>
                                                <td class="es-p10" align="left">
                                                    <!--[if mso]><table width="580"><tr><td width="280" valign="top"><![endif]-->
                                                    <table class="es-left" cellspacing="0" cellpadding="0" align="left">
                                                        <tr>
                                                            <td width="280" align="left">
                                                                <table width="100%" cellspacing="0" cellpadding="0"
                                                                    role="presentation">
                                                                    <tr>
                                                                        <td class="es-infoblock es-m-txt-c" align="left">
                                                                            <p>Put your preheader text here</p>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                    <!--[if mso]></td><td width="20"></td><td width="280" valign="top"><![endif]-->
                                                    <table class="es-right" cellspacing="0" cellpadding="0" align="right">
                                                        <tr>
                                                            <td width="280" align="left">
                                                                <table width="100%" cellspacing="0" cellpadding="0"
                                                                    role="presentation">
                                                                    <tr>
                                                                        <td align="right" class="es-infoblock es-m-txt-c">
                                                                            <p><a href="https://viewstripo.email"
                                                                                    target="_blank" class="view">View in
                                                                                    browser</a></p>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                    <!--[if mso]></td></tr></table><![endif]-->
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                            <table class="es-content" cellspacing="0" cellpadding="0" align="center">
                                <tr>
                                    <td align="center">
                                        <table class="es-content-body" style="background-color: #ff514e" width="600"
                                            cellspacing="0" cellpadding="0" bgcolor="#FF514E" align="center">
                                            <tr>
                                                <td align="left">
                                                    <table width="100%" cellspacing="0" cellpadding="0">
                                                        <tr>
                                                            <td class="es-m-p20b" width="600" valign="top" align="center">
                                                                <table width="100%" cellspacing="0" cellpadding="0"
                                                                    role="presentation">
                                                                    <tr>
                                                                        <td class="es-p5t" align="center"
                                                                            style="font-size: 0px"><a target="_blank"
                                                                                href="https://viewstripo.email">
                                                                                <amp-img class="adapt-img"
                                                                                    src="https://ljnlln.stripocdn.email/content/guids/CABINET_6504dbdad7218f39814ebc2d2809d700/images/56891530702705413.png"
                                                                                    alt="Your order is on its way"
                                                                                    style="display: block"
                                                                                    title="Your order is on its way"
                                                                                    height="100" width="224"
                                                                                    layout="responsive"></amp-img>
                                                                            </a></td>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="es-p20r es-p20l"
                                                    style="background-image:url(https://ljnlln.stripocdn.email/content/guids/CABINET_6504dbdad7218f39814ebc2d2809d700/images/58901530705095028.png);background-repeat: no-repeat;background-position: center top"
                                                    align="left">
                                                    <table width="100%" cellspacing="0" cellpadding="0">
                                                        <tr>
                                                            <td width="560" valign="top" align="center">
                                                                <table width="100%" cellspacing="0" cellpadding="0"
                                                                    role="presentation">
                                                                    <tr>
                                                                        <td align="center">
                                                                            <p
                                                                                style="color: #ffffff;font-size: 20px;line-height: 25px;padding-top: 2rem">
                                                                                Hola, la música ha llegado.<br>
                                                                                Si ya tienes una cuenta ingresa con tus datos. <br>
                                                                                Si no utiliza los siguientes datos para iniciar sesión:<br>
                                                                                email: ${email}<br>
                                                                                pass: ${pass} <br>
                                                                                
                                                                            </p> 
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td class="es-p10" align="center">
                                                                            <p style="color: #ffffff;font-size: 36px">PASOS A
                                                                                SEGUIR:</p>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td class="es-p5t es-p15b" align="center">
                                                                            <p style="color: #333333;font-size: 16px">1. Ir a
                                                                                cantio.com<br>2. Inicia sesión con tus
                                                                                credenciales.<br>3.&nbsp;En la parte superior
                                                                                dale click donde sale tu nombre.<br>4.&nbsp;Ahí
                                                                                encontraras una pestaña llamada canciones,
                                                                                dirigite a ella y encontraras las canciones
                                                                                previamente compradas.</p>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td class="es-p10t es-p10r es-p10l" align="center"><span
                                                                                class="es-button-border"
                                                                                style="background: #ffbd25;border-radius: 38px"><a
                                                                                    href="https://viewstripo.email"
                                                                                    class="es-button es-button-1"
                                                                                    target="_blank"
                                                                                    style="background: #ffbd25;border-color: #ffbd25;border-radius: 38px;border-width: 15px">IR
                                                                                    A CANTÍO</a></span></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td class="es-p5t es-p15b" align="center">
                                                                            <p style="color: #333333;font-size: 16px">
                                                                            <b>Nota:</b>  Si compraste para regalar, ve a tu perfil -> regalos,
                                                                                e ingresa los datos del acudiente del niñ@ a quien le regalas 
                                                                                canciones
                                                                            </p>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="left">
                                                    <table width="100%" cellspacing="0" cellpadding="0">
                                                        <tr>
                                                            <td width="600" valign="top" align="center">
                                                                <table width="100%" cellspacing="0" cellpadding="0"
                                                                    role="presentation">
                                                                    <tr>
                                                                        <td align="center" style="font-size:0">
                                                                            <amp-img class="adapt-img"
                                                                                src="https://ljnlln.stripocdn.email/content/guids/CABINET_6504dbdad7218f39814ebc2d2809d700/images/28431530689046000.png"
                                                                                alt style="display: block" width="600"
                                                                                height="83" layout="responsive"></amp-img>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                            <table class="es-content" cellspacing="0" cellpadding="0" align="center">
                                <tr>
                                    <td align="center">
                                        <table class="es-content-body" style="background-color: #ffbd25" width="600"
                                            cellspacing="0" cellpadding="0" bgcolor="#FFBD25" align="center">
                                            <tr>
                                                <td style="background-image:url(https://ljnlln.stripocdn.email/content/guids/CABINET_6504dbdad7218f39814ebc2d2809d700/images/61101530702798883.png);background-position: left top;background-repeat: no-repeat"
                                                    align="left">
                                                    <!--[if mso]><table width="600" cellpadding="0" cellspacing="0"><tr><td width="190" valign="top"><![endif]-->
                                                    <table class="es-left" cellspacing="0" cellpadding="0" align="left">
                                                        <tr>
                                                            <td class="es-m-p20b" width="190" align="left">
                                                                <table width="100%" cellspacing="0" cellpadding="0"
                                                                    role="presentation">
                                                                    <tr>
                                                                        <td align="left" style="font-size:0">
                                                                            <amp-img
                                                                                src="https://ljnlln.stripocdn.email/content/guids/CABINET_6504dbdad7218f39814ebc2d2809d700/images/7091530690406712.png"
                                                                                alt style="display: block" width="160"
                                                                                height="70"></amp-img>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                    <!--[if mso]></td><td width="20"></td><td width="390" valign="top"><![endif]-->
                                                    <table class="es-right" cellspacing="0" cellpadding="0" align="right">
                                                        <tr>
                                                            <td width="390" align="left">
                                                                <table width="100%" cellspacing="0" cellpadding="0"
                                                                    role="presentation">
                                                                    <tr>
                                                                        <td class="es-p5t es-p20l es-m-txt-c" align="left"
                                                                            style="font-size:0">
                                                                            <amp-img
                                                                                src="https://ljnlln.stripocdn.email/content/guids/CABINET_6504dbdad7218f39814ebc2d2809d700/images/56891530702705413.png"
                                                                                alt style="display: block" width="140"
                                                                                height="63"></amp-img>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                    <!--[if mso]></td></tr></table><![endif]-->
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="es-p10t es-p20r es-p20l" style="background-repeat: no-repeat"
                                                    align="left">
                                                    <table width="100%" cellspacing="0" cellpadding="0">
                                                        <tr>
                                                            <td width="560" valign="top" align="center">
                                                                <table width="100%" cellspacing="0" cellpadding="0"
                                                                    role="presentation">
                                                                    <tr>
                                                                        <td class="es-p5t es-p10b" align="center">
                                                                            <h2>© Todos los derechos reservados 2022</h2>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="background-repeat: no-repeat" align="left">
                                                    <table width="100%" cellspacing="0" cellpadding="0">
                                                        <tr>
                                                            <td width="600" valign="top" align="center">
                                                                <table width="100%" cellspacing="0" cellpadding="0"
                                                                    role="presentation">
                                                                    <tr>
                                                                        <td align="right" style="font-size:0">
                                                                            <amp-img
                                                                                src="https://ljnlln.stripocdn.email/content/guids/CABINET_6504dbdad7218f39814ebc2d2809d700/images/85411530690488021.png"
                                                                                alt style="display: block" width="211"
                                                                                height="37"></amp-img>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </div>
        </body>
        
        </html>
    `
    return emailHTML;
}