'use strict'

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Product = mongoose.model('Product');

router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "Node api",
        version: "0.0.1"
    });
});
router.get('/index/teste',(req,res,next)=>{
    res.render('teste.ejs');
});
router.get('/index', (req, res, next) => {
    Product
        .find({
            active: true
        }, /*'title price slug'*/ )
        .then(data => {
            // res.status(200).send(data);
            res.render('index.ejs', {
                lista: data
            });
        }).catch(e => {
            res.status(400).send({
                e
            });
        });
});


router.get('/index/products', (req, res, next) => {
    Product
        .find({
            active: true
        }, /*'title price slug'*/ )
        .then(data => {
            // res.status(200).send(data);
            res.render('products.ejs', {
                lista: data
            });
        }).catch(e => {
            res.status(400).send({
                e
            });
        });
});

router.get('/product/:id', (req, res, next) => {
    Product
        .find({
            _id: req.params.id,
            active: true
        })
        .then(data => {
             res.render('product.ejs', {
                 lista: data
             });
        }).catch(e => {
            res.status(400).send({
                e
            });
        });
});

router.get('/index/login',(req,res,next)=>{
    res.render('novoLogin.ejs');
});

router.get('/index/login1',(req,res,next)=>{
    res.render('doLogin.ejs');
});

module.exports = router;