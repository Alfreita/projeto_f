'use strict'

const mongoose = require('mongoose');
const User = mongoose.model('User');
exports.post = (req,res,next) =>{
    var user = new User(req.body);
    user    
        .save()
        .then(x=>{
            res.status(201).send({
                message:'usuario cadastrado com sucesso'
            });
        }).catch(e=>{
            res.status(400).send({
                message:'Falha ao cadastrar usuario',
                data:e
            });
        });

}
exports.get =(req,res,next)=>{
    User
        .find({})
        .then(data =>{
            res.status(200).send(data);
        }).catch(e => {
            res.status(400).send({
                e
            });
        });
};

exports.getByCpf=(req,res,next)=>{
    User
        .find({
            cpf:req.params.cpf
        })
        .then(data => {
            res.status(200).send(data);
        }).catch(e => {
            res.status(400).send({
                e
            });
        });
};

exports.doLogin=(req,res,next)=>{
    User.findOne({
        usuario:req.body.usuario,
        senha:req.body.senha
    }).then(data=>{
        res.status(200).send(data);
        console.log("usario cadastrado");
    }).catch(e=> {
        console.log("usuario não cadastrado");
    });
}