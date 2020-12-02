

module.exports = (sequlize, type) => {
    return sequlize.define("sub_category", {
        idsub_category: {
            type: type.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        id_category: {
            type: type.INTEGER,
            refereneces: {
                model:'categories',
                key:'idcategory',
            }
        },
        sub_cat_name:{
            type:type.STRING
        },
        sub_cat_description:{
            type:type.TEXT
        }


    }, {
        timestamps: false
    })
}