global.db  = require('../mongoDB/mongoDB');
module.exports =function(app){

    app.post('/salva',function(req,res){
        const customer = req.body
        global.db.insertCustomer(customer, (err,
       result) => {
        if(err) res.status(500).json(err)
        else res.json({ message: 'Clientecadastrado com sucesso!'})
        })

    });
}