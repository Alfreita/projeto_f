var app = require ('./config/express')();

app.set('view engine','ejs');

app.get('/index', function(req,res){ // requisição e resposta
  console.log("Atendendo requisicao");
  res.render("html/index");
});

app.listen(3000,function(){
    console.log("servidor rodando");
});