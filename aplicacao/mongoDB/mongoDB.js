const mongoClient = require("mongodb").MongoClient
mongoClient.connect("mongodb://localhost:27017/mydb")
      .then(conn => global.conn =conn.db("mydb"))
      .catch(err => console.log(err))
module.exports = {}

function findCustomers (callback){
    global.conn.collection('customers').find().toArray(callback)
}

module.exports = {findCustomers}