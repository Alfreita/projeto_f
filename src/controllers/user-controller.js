'use strict'

const mongoose = require('mongoose');
const User = mongoose.model('User');
const querystring = require('querystring');    
exports.post = (req, res, next) => {
    var user = new User(req.body);
    user
        .save()
        .then(x => {
            res.status(201).send({
                message: 'usuario cadastrado com sucesso'
            });
        }).catch(e => {
            res.status(400).send({
                message: 'Falha ao cadastrar usuario',
                data: e
            });
        });

}
exports.get = (req, res, next) => {
    User
        .find({})
        .then(data => {
            res.status(200).send(data);
        }).catch(e => {
            res.status(400).send({
                e
            });
        });
};

exports.getByCpf = (req, res, next) => {
    User
        .find({
            cpf: req.params.cpf
        })
        .then(data => {
            res.status(200).send(data);
        }).catch(e => {
            res.status(400).send({
                e
            });
        });
};

exports.doLogin = (req, res, next) => {
  //  console.log(req.query.email, req.query.senha);
    let email = req.query.email;
    //console.log(req);
    User.findOne({
        email: req.query.email,
        senha: req.query.senha
    }).then(data => {
      // console.log(data);
      //console.log(email); 
      if(data === null){
        res.redirect('http://localhost:3000/indexe/'+ data);
      }else{
        const query = querystring.stringify({
            "nome":data.name,
            "cpf":data.cpf,
            "id":data._id+''
        });
        
        res.redirect('http://localhost:3000/indexe'+ "?"+query);
      }
       
    }).catch(e => {
        res.send(e);
    });
}