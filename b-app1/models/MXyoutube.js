//Definiendo un objeto del tipo Mongoose, (Modelo)

const mongoose = require ('mongoose');

//Define la estructura de videos vistos en Mexico

const VideoSchema = mongoose.Schema(
    {
        //Listar los atributos de cada documentos

        
        video_id: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        channelId: {
            type: String,
            required: true
        },
    }
)

const MXvideo = mongoose.model('Mxvideo', VideoSchema);
module.exports = MXvideo;