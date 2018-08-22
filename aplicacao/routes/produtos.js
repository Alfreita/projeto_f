

module.exports = function(app){
    app.get('/produtos', function(req,res){
        var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.collection("customers").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    res.render('html/produtos',{produtos:result});
    db.close();
  });
}); 

    });
                
};