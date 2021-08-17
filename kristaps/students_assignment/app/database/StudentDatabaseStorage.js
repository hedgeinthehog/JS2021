const connection = require("./dbConnection")

class StudentDatabaseStorage {
    constructor(tableName) {
        this.tableName = tableName
    }

    async getAll() {
        try {
            const [result] = await connection.promise().query(
                `SELECT * FROM ${this.tableName}`, 
                )
            // console.log(result)
            return result
        }
        catch (error) {
            console.log(error)
        }  
    }

    async getById(id) {
        try {
            const [result] = await connection.promise().execute(
                `SELECT * FROM ${this.tableName} WHERE id=?`, [id]
                )
            // console.log(result)
            return result[0]
        }
        catch (error) {
            console.log(error)
        }
    }

    async create(data) {
        try {
            const [result] =await connection.promise().execute(
                `INSERT INTO ${this.tableName}
                (name, surname, age, gender) 
                VALUES (?, ?, ?, ?);`,
                [data.name, data.surname, data.age, data.gender]
                )
            // console.log(result)
            return result.insertId
        }
        catch (error) {
            console.log(error)
        }
    }

    async update(data) {
        try {
            const [result] = await connection.promise().execute(
                `UPDATE ${this.tableName}
                SET name=?, surname=?, age=?, gender=?
                WHERE id=${data.id}`,
                [data.name, data.surname, data.age, data.gender]
                )
        }
        catch (error) {
            console.log(error)
        }
    }

    async delete(id) {
        try {
            await connection.promise().execute(
                `DELETE FROM ${this.tableName}
                WHERE id=?`,
                [id]
                )
        }
        catch (error) {
            console.log(error)
        }
    }
}


module.exports = StudentDatabaseStorage