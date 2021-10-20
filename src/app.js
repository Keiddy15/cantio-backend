const express = require('express');
const morgan = require('morgan');
const {database} = require('./keys');
const bodyParser = require('body-parser')
var cors = require('cors')
const pool = require("./database");

//Iniciando express
const app = express();

//Configuraciones
app.set('port', 3000);

//Middlewares
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
var corsOptions = {
    credentials: true,
    origin:'*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions));

//Variables globales
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
})

//Rutas
app.get('/', function (req, res) {
    res.send('Hola, está es la api de CANTIO')
})
app.use('/usuario/', require('./usuario/usuario.routes'))

//listen
app.listen(app.get('port'), () => {
    console.log('Servidor en puerto', app.get('port'));
})
