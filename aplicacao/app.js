var app = require ('./config/express')();
var rotasProdutos = require('./routes/produtos')(app);
var mongodb = require('./mongoDB/mongoDB');
 
app.listen(3000,function(){
    console.log("servidor rodando");
});