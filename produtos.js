var http = require('http');//serve para carregar uma lib desejada
var porta = 3000;
var ip = "localhost";

var server = http.createServer(function(req, res) { // req serve para pegar a requisição e o res para a resposta ou seja callback
    console.log("Recebendo request");
    res.writeHead( "html/index.html");
    res.end('<html><body>Request recebido!</body></html>');
});

server.listen(porta, ip);

console.log("Server running at http://" + ip + ":" + porta + "/");