const express = require('express');
const morgan = require('morgan');
const app = express();
require('./dbconfig/dbconfig');


//middlewares config
app.use(morgan("dev"));


//routes
app.use('/api', require('./routes/api'));

//server
app.listen(4000, console.log("BEEP BEEP te escucho"));