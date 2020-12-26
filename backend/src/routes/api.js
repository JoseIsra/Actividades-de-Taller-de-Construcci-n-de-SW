

const model = require('../dbconfig/dbconfig');
const { QueryTypes } = require('sequelize');
const clientController = require('../controllers/clients');
const productsController = require('../controllers/products');
const client = require('../models/client');
const router = require('express').Router();



router.get('/pets', async(req, res) => {

    const response = await model.pet.findAll();
    const responseJson = JSON.stringify(response);
    res.send(responseJson);
});

router.get('/category', async(req, res) => {
    const  response= await model.category.findAll();
    const responseJson = JSON.stringify(response);
    res.send(responseJson);res.end();
});

router.get('/products/:id', productsController.getProducts);

router.post('/register', clientController.saveClient);
router.post('/login',clientController.login);




module.exports = router;