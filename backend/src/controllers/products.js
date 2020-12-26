const model = require('../dbconfig/dbconfig');
const { QueryTypes } = require('sequelize');


module.exports = {
    getProducts: async(req, res) =>{
        const {id} = req.params;
        const products = await model.statement.sequelize.query(`
        SELECT idproduct, prod_name , prod_price, prod_image FROM products p
    INNER JOIN sub_categories sc ON p.prod_idsubcategory = sc.idsub_category
    INNER JOIN categories c ON sc.id_category = c.idcategory where c.idcategory = ?
        `, {
            replacements:[`${id}`],
            type:QueryTypes.SELECT
        });
        const productsJson = JSON.stringify(products);
        res.send(productsJson);
        res.end();
    }
}