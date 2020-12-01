const express = require('express');
const morgan = require('morgan');
const app = express();
require('./dbconfig/dbconfig');

app.use(morgan("dev"));



app.use('/api', require('./routes/api'));


app.listen(4000, console.log("BEEP BEEP te escucho"));