const express = require('express');
const app = express()
const dbConnect = require('./mongodb.js');

app.use(express.json());

app.put('/', async (req, res) => {
    let data = await dbConnect();
    let result =  data.updateOne({price:req.body.price},{$set:req.body})
    res.send({result:"updated"})
})
   

app.listen(8080);