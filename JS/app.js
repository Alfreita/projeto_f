var express = require('express'); // requisição da dependencia express
var app = express();

app.get('/index', function(req,res){ // requisição e resposta
  res.send("<html><body><h1>Listagem de produtos</h1></body></html>");
});

app.listen(3000,function(){
    console.log("servidor rodando");
    });