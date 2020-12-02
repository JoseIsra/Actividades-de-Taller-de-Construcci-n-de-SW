const {Sequelize} = require('sequelize');
const petModel = require('../models/pet');
const categoryModel = require('../models/category');

//const db = {};

const sequelize = new Sequelize( 
    'happypet',
    'root',
    '54321', 
    {
    host: 'localhost',
    dialect:'mysql'
});

const Pet = petModel(sequelize,Sequelize);
const Category = categoryModel (sequelize,Sequelize);


sequelize.sync({force:false})
.then(()=>{
    console.log('tablas sincronizadas');
}).catch((err)=> console.log(err) );

//db.sequelize = sequelize
// db.Sequelize = Sequelize

module.exports={
Pet,
Category
}
