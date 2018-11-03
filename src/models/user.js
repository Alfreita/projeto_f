 'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const schema = new Schema({
   usuario:{
       type:String,
       required:true,
       trim:true
   },
   senha:{
    type:String,
    required:true
   },
	cpf:{
        type:Number,
        trim:true,
        unique:true,
        require:true
    },
	cnpj:{
        type:Number

    },
	rg:{
        type:Number,
        required:true,
        unique:true
        
    },
	nome:{
        type:String,
        required:true,
    },
	email:{
        type:String,
        required:true,
        unique:true
    },
	telefones:[ {
        type:Number,
        require:true,
        unique:true
    }],
	endereco: {    
         cep:{
            type:Number,
            require:true
            },
			cidade:{
                type:String
            },
			rua:{
                type:String,
                require:true
            },
			bairro:{
                type:String,
                require:true
            },
			numero:{
                type:Number,
                require:true
            },
			complemento:{
                type:String,
            }
		},
	cartoes: [ {
				bandeira:String,
				nomeNoCartao:String,
				numero:Number,
				dataValidade:String
				} ],

	carrinhoDeCompras: {  produtos: [],
							valorTotal:String
						 },
	compras: [ { produtos: [],
					valorTotal:String,
					qtdParcelas:Number,
					numeroPedido:Number,
					valorFrete:String
				} ],
});

module.exports = mongoose.model('User',schema);