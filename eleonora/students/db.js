const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'university'
});

connection.connect((e) => {
  if (e) {
    return console.log(`DB connection failed, ${e}`);
  };

  return console.log('DB connected!');
});

module.exports = connection;