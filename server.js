const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get("/", (req, res)=>{
    res.json({message: "sukses memparsing data."})
})

require('./app/routes/product.route')(app)
app.listen(3000, ()=>{
    console.log("server berjalan di port 3000")
})