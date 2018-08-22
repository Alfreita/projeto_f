var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var doc = { name: "Virtus Inc", address: "Highway 37" };
  var doc1 = { name: "Lusca Inc", address: "Highway 37" };
  var doc2 = { name: "Paulos Inc", address: "Highway 37" };
  //neste ponto está sendo inserido um dado no node
  dbo.collection("customers").insertOne(doc, function(err, res) {
    if (err) throw err;
    console.log("document inserted");
  });
  dbo.collection("customers").insertOne(doc1, function(err, res) {
    if (err) throw err;
    console.log("document inserted");
  });
  dbo.collection("customers").insertOne(doc2, function(err, res) {
    if (err) throw err;
    console.log("document inserted");
  });
//neste ponto esta sendo recuperado do banco
  dbo.collection("customers").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
  });
  db.close();
}); 
