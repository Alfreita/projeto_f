'use strict'
const mongoose = require('mongoose');
const Pedido = mongoose.model('Pedido');

exports.post=(req,res,next) => {
    var pedido = new Pedido(req.body);

    pedido
        .save()
        .then(x =>{
            res.status(201).send({
                message:'pedido cadastrado com sucesso'
            });
        }).catch(e =>{
            res.status(400).send({
                message:'Falha ao cadastrar o pedido',
                data: e
            });
        });
};