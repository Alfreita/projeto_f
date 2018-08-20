module.exports = function(app){
    app.get('/index', function(req,res){
        console.log("GET de index");
        res.render("html/index");
    });
}