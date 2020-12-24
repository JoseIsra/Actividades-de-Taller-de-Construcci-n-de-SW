const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
require('./dbconfig/dbconfig');


//bodyparser

//middlewares config
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

//routes
app.use('/api', require('./routes/api'));

//server
app.listen(4000, console.log("BEEP BEEP te escucho"));