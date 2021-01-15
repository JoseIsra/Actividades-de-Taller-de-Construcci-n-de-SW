const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const model = require('./dbconfig/dbconfig');
const session = require('express-session');
const passport = require('passport');
const SessionStore = require('express-session-sequelize')(session.Store);
const app = express();
require('./dbconfig/dbconfig');
require('./passport/passport')(passport);

//bodyparser

//middlewares config
app.use(express.json());
app.use(cors({
    origin:'http://localhost:3000',
    credentials:true
}));
app.use(morgan("dev"));


const sequelizeSessionStore = new SessionStore({
    db: model.seque,
    table:'sessions'
});


app.use(session({
    key:'asdfasdfnclanspp',
    secret:"the secrete madafaka secret",
    store:sequelizeSessionStore,
    resave: false,
    saveUninitialized: false

}));

app.use(passport.initialize());
app.use(passport.session());

//routes
app.use('/api', require('./routes/api'));

//server
app.listen(8080, console.log("BEEP BEEP te escucho"));