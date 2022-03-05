const express = require('express');
const app = express()
const dbConnect = require('./mongodb.js');

app.use(express.json());

app.post('/',async(req,res)=>{
    let db = await dbConnect();
    let result = await db.insert(req.body)
    res.send(result)

})
app.listen(8080);