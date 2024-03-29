const MongoClient = require('mongodb').MongoClient
const dotenv = require('dotenv')
dotenv.config()

const url = process.env.URL
const port = process.env.PORT

MongoClient.connect(url, (err, client)=>{
    if(err) throw err

    console.log("db connected...")
    module.exports = client

    const app = require('./app')
    app.listen(port, ()=>{
        console.log("server listening on 8000...")
    })
})