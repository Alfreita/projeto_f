'use strict'

const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const router = express.Router();

mongoose.connect('mongodb://balta:a1b2c3d4@ds155862.mlab.com:55862/baltaio');
const Product = require('./models/product');
const Pedido = require('./models/pedido');
const User = require('./models/user');
//carrega as rotas
const apiTeste = require('./routes/index-route');
const productsRoute = require('./routes/product-route');
const userRoute = require('./routes/user-route');
const pedidoRoute = require('./routes/pedido-route');
app.use(express.static('./src/public/'));
app.set('view engine', 'ejs');
app.set('views', './src/public/views');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended: false
}));

app.use('/', apiTeste);
app.use('/products', productsRoute);
app.use('/user', userRoute);
app.use('/pedido',pedidoRoute);
module.exports = app;