const MXvideo = require('../models/MXyoutube');


//Función para recuperar colección
const getMXvideo = async (req, res) => {
    try {
        const Mxvideos = await MXvideo.find({});
        res.status(200).json(Mxvideos);
    } catch (error){
        res.status(500).json({
            status: "error: " + error.message
        });
    }
}

//Funcion para recuperar un elementos de la colección con base en el _id

const getMXvideoById = async (req, res) => {
    try {
        //id proviene de una variable en la URL
        const id = req.params()
        const Mxvideos = await MXvideo.find({'_id': id});
        res.status(200).json(Mxvideos);
    } catch (error){
        res.status(500).json({
            status: "error: " + error.message
        });
    }
}

//Funcion que agrega un elemento a la coleccion

const setMXvideo = async (req, res) => {
    try {
       
        const video = await MXvideo.create(req.body);
        res.status(200).json(video);
    } catch (error){
        res.status(500).json({
            status: "error: " + error.message
        });
    }
}

//Funcion para actualizar un elementos de la colección usando el ID

const updateMXvideo = async (req, res) => {
    try {
        const {id} = req.params;
        const updateMXvideo = await MXvideo.findByIdAndUpdate(id, req.body);
        if(!updateMXvideo) {
            return res.status(400).json({

                status: "error",
                message: "Documento no encontrado"
            });
        }
        
        const Mxvideos = await MXvideo.find({'_id': id});
        res.status(200).json(Mxvideos);

    } catch (error){
        res.status(500).json({
            status: "error: " + error.message
        });
    }
}
//Funcion para eliminar un elementos de la colección con base en el _id


const deleteMXvideoById = async (req, res) => {
    try {
        
        const {id} = req.params;
        const Mxvideos = await MXvideo.find({'_id': id});
        if(!Mxvideos) {
            return res.status(400).json({

                status: "error",
                message: "Documento no encontrado"
            });
        }
        const deleteMXvideo = await MXvideo.deleteOne({'_id': id});
               res.status(200).json({
            message: "Documento eliminado"
        });

    } catch (error){
        res.status(500).json({
            status: "error: " + error.message
        });
    }
}


module.exports = {

    getMXvideo,
    getMXvideoById,
    setMXvideo,
    updateMXvideo,
    deleteMXvideoById
}