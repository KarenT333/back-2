const express = require('express');
const router = express.Router();
const {
    getMXvideo,
    getMXvideoById,
    setMXvideo,
    updateMXvideo,
    deleteMXvideoById

} = require ('../controllers/MXyoutube.controller');

//Endpoint para recuperar toda la colección de videos

router.get('/all', getMXvideo)

//Endpoint para recuperar un elemento de la colección de videos

router.get('/ById/:id', getMXvideoById)

//Endpoint para agregar un nuevo elemento a la colección de videos

router.post('/add', setMXvideo)

//Endpoint para la actualización de uin elemento de la colección de videos

//router.put('/modify', updateMXvideo)
router.put('/modify/:id', updateMXvideo);

//Endpoint para eliminación de un elemento de la colección de videos

//router.get('/less', deleteMXvideoById)
router.delete('/delete/:id', deleteMXvideoById)

module.exports = router;