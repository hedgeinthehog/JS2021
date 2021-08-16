require("dotenv").config();

const fs = require("fs")
const path = require("path")
const mysql2 = require("mysql2")

const migrationsPath = path.resolve(__dirname, "./app/database/migrations")
const fileList = fs.readdirSync(migrationsPath)

console.log(fileList)

const connection = mysql2.createConnection({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASS,
})

// thank you for this code, I was lazy
async function runMigrations() {
    for (let i = 0; fileList[i]; i++) {
        const fileName = fileList[i];
        try {
            const data = fs.readFileSync(`${migrationsPath}/${fileName}`).toString();
            await connection.promise().query(data); //this is asynchronous call
            // will be green
            console.log(`\x1b[32m%s\x1b[0m`, `Migration succesfull: ${fileName}`);
        } catch (err) {
            // will be red
            console.log(`\x1b[31m%s\x1b[0m`, `Migration failed: ${fileName}`);
            console.log(err);
        }
    }
    connection.end()
}
runMigrations();




// connection.query("whatever query");