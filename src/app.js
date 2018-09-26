'use strict'
//parei na aula 23
//mLab banco de dados mongoDB online 

const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const router = express.Router();

mongoose.connect('mongodb://balta:a1b2c3d4@ds155862.mlab.com:55862/baltaio');
const Product = require('./models/product');
//carrega as rotas
const indexRoute = require('./routes/index-route');
const productsRoute = require('./routes/product-route');
app.use(express.static('./src/public'));
app.set('view engine','ejs');
app.set('views','./src/views');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));


app.use('/',indexRoute);
app.use('/products',productsRoute);


module.exports = app;