var express = require('express'); // requisição da dependencia express
var app = express();

app.set('view engine','ejs');

app.get('/index', function(req,res){ // requisição e resposta
  res.render("html/index");
});

app.listen(3000,function(){
    console.log("servidor rodando");
});