'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Schema = new Schema({
   usuario:{
       type:String,
       required:true,
       trim:true
   },
	cpf:{
        type:Number,
        require:true,
        trim:true,
        unique:true,
        require:true
    },
	cnpj:{
        type:Number,
        trim:true,
        unique:true

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
				"bandeira":,
				"nomeNoCartao":,
				"numero":,
				"dataValidade":
				} ],

	"carrinhoDeCompras": {  "produtos": [],
							"valorTotal":
						 },
	"compras": [ { "produtos": [],
					"valorTotal":,
					"qtdParcelas":,
					"numeroPedido":,
					"valorFrete"
				} ],
}

pedido {
	"numeroPedido":,
	"enderecoEntrega": { "cep":,
					     "cidade":,
					     "rua":,
					     "bairro":,
					     "numero":,
					     "complemento"
						},
	"produtos": []					

}
});