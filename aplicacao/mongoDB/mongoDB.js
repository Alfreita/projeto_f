const mongoClient = require("mongodb").MongoClient
mongoClient.connect("mongodb://localhost:27017/mydb")
      .then(conn => global.conn =conn.db("mydb"))
      .catch(err => console.log(err))
module.exports = {};

function insertDocument (document){
    global.conn.collection('customers').insertOne(document)
}
module.exports ={insertDocument};


function findCustomers (callback){
    global.conn.collection('customers').find().toArray(callback)
}
<<<<<<< Updated upstream

module.exports = {findCustomers}

function insertCustomer(customer, callback){
    global.conn.collection('customers').insert(customer, callback)
    }
    module.exports = {findCustomers,insertCustomer}
    
=======
module.exports = {findCustomers};
>>>>>>> Stashed changes
