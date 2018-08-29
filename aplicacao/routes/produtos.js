global.db  = require('../mongoDB/mongoDB');
module.exports = function(app){
    app.get('/produtos', function(req,res){

            db.findCustomers((err,docs) =>{
            if (err) res.status(500).json(err)
            else res.render("html/produtos",{produtos:docs});
        })

    });
};