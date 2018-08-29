global.db  = require('../mongoDB/mongoDB');
module.exports =function(app){

    app.get('/salva',function(req,res){
        res.render('html/form');
    });

    app.post('/produtos/salva',function(req,res){
        const customer = req.body;
        console.log(customer);
        global.db.insertCustomer(customer, (err, result) => {
        if(err) res.status(500).json(err)
        else res.json({ message: 'Clientecadastrado com sucesso!'})
        })
    });

}