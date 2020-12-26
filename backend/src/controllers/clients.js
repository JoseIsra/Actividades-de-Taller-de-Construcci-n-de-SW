const passport = require('passport');
const model = require('../dbconfig/dbconfig');
const bcrypt = require('bcryptjs');


module.exports = {
    saveClient: async(req, res)=>{
        //autenticar correo
    try{
        const client = await model.client.findOne({
            where:{
                cli_email:req.body.cli_email
            }
        })
        if(!client){
            let hashPassword
            // hashear la contraseña
            hashPassword = bcrypt.hashSync(req.body.cli_password , 10);
            //guardar el registro
            req.body.cli_password = hashPassword;
            await model.client.create(req.body);
            console.log("datos registrados");
            res.end();
        }else{
            res.send("Ese correo ya existe");res.end();
        }
    }catch(err){
        console.log(err);
    }},
    login: (req, res, next )=>{
        passport.authenticate('local', (err,user)=> {
            if(err) throw err;
            if(!user){
                res.send("Datos inválidos");
            }
            else{
                req.logIn(user , (err) => {
                    res.send("autenticación exitosa");
                console.log("user enviado");       
                })
            }
        })(req, res, next);

    },
    getUser:(req, res)=>{
        res.send(req.user);
    },
    logout:(req, res)=>{
        req.logout();
        res.send("sesion terminada");
    }


};