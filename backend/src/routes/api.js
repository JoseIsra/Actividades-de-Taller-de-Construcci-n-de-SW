
const { Pet } = require('../dbconfig/dbconfig');
const { Category } = require('../dbconfig/dbconfig');

const router = require('express').Router();



router.get('/pets', async(req, res) => {

    const respuesta = await Pet.findAll();
    const rsptaJson = JSON.stringify(respuesta);
    res.send(rsptaJson);
});

router.get('/category', async(req, res) => {
    const respuesta = await Category.findAll();
    const rsptaJson = JSON.stringify(respuesta);
    res.send(rsptaJson);
});




module.exports = router;