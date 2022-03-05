const{MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017';
const database = 'shop';
const client = new MongoClient(url);



async function dbConnect() {
    let result = await client.connect();
    db = result.db(database);
    return db.collection('mobile');
}

module.exports = dbConnect;