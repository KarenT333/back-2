//Invocación de la librería express
const express = require('express');
//Invocación de la librería mongoose para conexión a base de datos mongodb
const mongoose = require('mongoose');



//Importar las rutas de la colección MXyoutube
const MXyoutuberoute = require('./routes/MXyoutube.route');


//Inicialización de la aplicación
const app = express();
// Incomrporación el parse de JSON
app.use(express.json() );

//Determinación del puerto


//Tareas CRUD
// C - Create (Crear, agregar) ---> post
// R - Read (Leer o recuperar) ---> get
// U - Update (Actualizar) ---> put
// D- Delete (Borrar o eliminar) ->delete


//Endpoint por defecto


app.get('/', (req , res) => {
    res.send ('Bienvenido a mi servidor de APIS')
})


//Enpoints de la colección de MXyoutube
app.use('/api/MXvideos', MXyoutuberoute);







//Definiendo la conexión a la Base de datos a traves de Mongoose
//La conexión a base de datos es de tipo promesa
mongoose.connect('mongodb+srv://utp0159252:SethoK@youtubemex.fdaxy.mongodb.net/MX_youtube_trending_data')
    .then(() => {

    console.log('Conectado a la Base de Datos de manera exitosa');
    
    app.listen(3000, () => {
        console.log('Servidor respondiendo en el puerto 3000');
    });
})
.catch( () => console.log('Ocurrió un problema al conectar la base de datos'));








