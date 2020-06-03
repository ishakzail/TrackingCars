const express = require('express');
const v1 = require('./routes/V1');
const mongoose = require('mongoose')
const bodyparser = require('body-parser')
const {mongoURI} = require('./config/keys')
const app = express();
var cors = require('cors')






app.use(cors())



app.use(bodyparser.json());



/*  DB Connection */

mongoose
    .connect(mongoURI , {useNewUrlParser : true , useFindAndModify: false , useUnifiedTopology: true , useCreateIndex: true })
    .then(() => console.log('mongo db connected well !') )
    .catch(err => console.log(err))



// ------------- Routes  ------------- //

app.use(v1);




module.exports = app;