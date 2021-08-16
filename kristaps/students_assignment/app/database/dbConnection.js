const mysql2 = require("mysql2")

const dbConnection = mysql2.createConnection({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASS,
    database:'uni'
})

module.exports = dbConnection

