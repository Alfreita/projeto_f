'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const schema = new  Schema({

	pedido :{
		numeroPedido:Number,
		enderecoEntrega: { cep:Number,
							 cidade:String,
							 rua:String,
							 bairro:String,
							 numero:Number,
							 complemento:String
							},
		produtos: []					
	
	}
});




