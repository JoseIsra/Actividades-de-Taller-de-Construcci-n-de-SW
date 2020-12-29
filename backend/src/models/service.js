

module.exports = (sequlize, type) => {
    return sequlize.define("service", {
        idservice: {
            type: type.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
    serv_name:{
            type:type.STRING
        },
        serv_description:{
            type:type.TEXT
        },
        serv_type:{
            type:type.INTEGER,
            allowNull:false,
            references:{
                model:'service_types',
                key:'idservice_type',
            }
        }


    }, {
        timestamps: false
    })
}