const mysql2 = require("mysql2")


// method 1
const connection = mysql2.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'university'
});

module.exports = connection;

connection.query("whatever query");


// method 2
const pool = mysql2.createPool({
    host:'localhost',
    user:'root',
    password:'',
    database:'university',
    waitForConnections: true,
    connectionLimit: 10
})

pool.getConnection((err, connection) => {
    if (err) throw err
    connection.query("sql here")
    connection.release()
})