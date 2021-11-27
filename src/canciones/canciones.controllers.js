const cancionesService = require('./canciones.service')
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

cancionesController.obtenerUsuariosCancionesPorId = async (req, res) =>  {
    try {
        const canciones = await cancionesService.obtenerUsuariosCancionesPorId(req.params.id)
        return res.status(200).json(canciones)
    } catch (error) {
        return res.send(error)
    }
}

module.exports = cancionesController;
