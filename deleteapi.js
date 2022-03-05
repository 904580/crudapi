const express = require('express');
const app = express()
const dbConnect = require('./mongodb.js');
const mongodb = require('mongodb');

app.use(express.json());

app.delete('/:id', async (req, res) => {
    console.log(req.params.id)
    const data = await dbConnect();
    const result = data.deleteOne({_id: new mongodb.ObjectId(req.params.id)})
    res.send({result:"deleted"})
})
   
   

app.listen(8080);