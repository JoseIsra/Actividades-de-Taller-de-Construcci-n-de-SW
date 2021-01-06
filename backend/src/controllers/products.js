const model = require('../dbconfig/dbconfig');
const { QueryTypes } = require('sequelize');


module.exports = {
    getProducts: async(req, res) =>{
        const {id} = req.params;
        const products = await model.statement.sequelize.query(`
        SELECT idproduct, prod_name , prod_price, prod_image ,prod_description, prod_idsubcategory FROM products p
    INNER JOIN sub_categories sc ON p.prod_idsubcategory = sc.idsub_category
    INNER JOIN categories c ON sc.id_category = c.idcategory where c.idcategory = ?
        `, {
            replacements:[`${id}`],
            type:QueryTypes.SELECT
        });
        const productsJson = JSON.stringify(products);
        res.send(productsJson);
        res.end();
    },

    getProductById: async (req, res) => {
        const { id } = req.params;

        const product = await model.product.findByPk(id,{
                attributes:['idproduct','prod_name','prod_price','prod_description','prod_image']
            
        });

            const productJson = JSON.stringify(product);
            res.send(productJson);res.end();
    },
    buyingInfo:async(req, res) =>{
            const {basket , total} = req.body;
                //boleta random
                let randomBill = Math.random().toString(36).substring(2,12); 
                //autenticar boleta random para guardar en sale_details
                const sale = await model.sale.findOne({
                    where:{
                        bill_number:randomBill
                    }
                });
                if(!sale){
                    await model.sale.create({
                        idclient:req.user.idclient,
                        bill_number:randomBill,
                        total:total,
                        date:new Date()
                    });
                    basket.forEach(async(item) => {
                        await model.saleDetail.create({
                            bill_number:randomBill,
                            idproduct:item.idproduct,
                            quantity:item.cantidad
                        });
                });
                }else{
                    return;
                }
            res.send("compra realizada");
    }
}