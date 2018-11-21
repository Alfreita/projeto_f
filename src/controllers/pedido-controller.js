'use strict'

const mongoose = require('mongoose');
const Pedido = mongoose.model('Pedido');

exports.get = async (req, res, next) => {

    Pedido.find({})
    .populate('customer','name')
    .populate('items.product','title')
    .then(data => {
        res.status(200).send(data);
    }).catch(e => {
        res.status(400).send({
            e
        });
    });
    
 };

exports.post = async(req, res, next) => {
    var pedido = new Pedido(req.body);
    pedido.save()
    .then(x=>{
        res.status(201).send({
            message:'pedido realizado com sucesso'
        });
    }).catch(e =>{
        res.status(400).send({
            message:'Falha ao cadastrar pedido ',
            data:e
        });
    });
    
};
