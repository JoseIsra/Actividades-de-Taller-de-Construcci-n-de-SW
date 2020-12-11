const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
require('./dbconfig/dbconfig');


//middlewares config
app.use(morgan("dev"));
app.use(cors());

//routes
app.use('/api', require('./routes/api'));

//server
app.listen(4000, console.log("BEEP BEEP te escucho"));