var app = require ('./config/express')();
var rotasProdutos = require('./routes/produtos')(app);

app.listen(3000,function(){
    console.log("servidor rodando");
});