const mysql = require('mysql')
const dbConfig = require('../config/db.config')

const connection = mysql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASsWORD,
    database: dbConfig.DB
})

connection.connect((error)=>{
    if(error) throw error
    console.log('koneksi database sukses')
})

module.exports = connection