module.exports =function(app){
    app.post('/salva',function(req,res){
        res.render('html/form');
    });
}