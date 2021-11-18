const cancionesService = require('./canciones.service')
const jwt = require("jsonwebtoken")
const request = require("request");

const cancionesController = {}

cancionesController.obtenerNombres = async (req, res) =>  {
    try {
        const obtenerNombres = await cancionesService.obtenerNombres()
        return res.status(200).json(obtenerNombres)
    } catch (error) {
        res.send(error)
    }
}

cancionesController.reproducirCancion = async (req, res) =>  {
    try {
        let options = { 
            method: 'POST',
            url: 'https://st-cantio.devout.cc/',
            headers:
            { 
                'Cache-Control': 'no-cache',
                'Content-Type': 'multipart/form-data' 
            },
            formData: { 
                token_n: 'fQViD^trC6L*shivlCPneIiI0zDK9Aajc3H5mEU',
                name: req.body.nombre,
                song: req.body.cancion,
                Preview: req.body.preview
            } 
        };
        request(options, function (error, response, body) {
            if (error) throw new Error(error);
            return res.status(200).json(response.body)
        });
    } catch (error) {
        res.send(error)
    }
}

module.exports = cancionesController;
