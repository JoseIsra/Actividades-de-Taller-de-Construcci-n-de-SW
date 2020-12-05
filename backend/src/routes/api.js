
/* const { Pet } = require('../dbconfig/dbconfig');
const { Category } = require('../dbconfig/dbconfig');
const { Product } = require('../dbconfig/dbconfig'); */
const model = require('../dbconfig/dbconfig');
const router = require('express').Router();



router.get('/pets', async(req, res) => {

    const respuesta = await model.pet.findAll();
    const rsptaJson = JSON.stringify(respuesta);
    res.send(rsptaJson);
});

router.get('/category', async(req, res) => {
    const respuesta = await model.category.findAll();
    const rsptaJson = JSON.stringify(respuesta);
    res.send(rsptaJson);
});

router.get('/products', async(req, res)=> {
    const products = await model.product.findAll({
        attributes:['idproduct','prod_image', 'prod_name','prod_price']
    });
    const productsJson = JSON.stringify(products);
    res.send(productsJson);
    res.end();
}); 




module.exports = router;