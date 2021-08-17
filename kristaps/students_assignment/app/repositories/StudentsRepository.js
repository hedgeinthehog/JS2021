const StudentDatabaseStorage = require("../database/StudentDatabaseStorage")
const Student = require("../models/Student")

class StudentsRepository {
    constructor() {
        this.dataStorage = new StudentDatabaseStorage("students")
        this.studentsList = []
        this.studentsListFilled = false; // from database
    }

    async getAllStudents() {
        if (!this.studentsListFilled) {
            console.log("wasn't cached, getting the list from database")
            this.studentsList = (await this.dataStorage.getAll()).map(
                (data) => new Student(data)
            );
            this.studentsListFilled = true
        }
        return this.studentsList
    }

    async getStudentById(id) {
        // look in cache
        let student = this.studentsList.find((student) => student.id == id)

        // if found return it
        if (student) return student;

        console.log("wasn't cached, getting item from database")

        // if wasn't in cache look into database
        const data = await this.dataStorage.getById(id)

        // if found make sure it is in cache and return
        if (data) {
            let student = new Student(data)
            this.studentsList.push(student)
            return student
        }

        console.log("student not found")
    }

    async saveStudent(data) {
        const student = new Student(data)
        // if id is defined this entry should have been chached already
        if (data.id) {
            const index = this.studentsList.findIndex(student => student.id == data.id)
            this.studentsList[index] = student
            await this.dataStorage.update(student)
        }
        else {
            const id = await this.dataStorage.create(student)

            // not gonna actually use it but this will put it in studentsList
            // else the studentsList will be missing an item when requested
            this.getStudentById(id) 
        }
    }

    async deleteStudent(id) {
        const index = this.studentsList.findIndex(student => student.id == data.id)
        this.studentsList.splice(index, 1)
        await this.dataStorage.delete(id)
    }
}

module.exports = StudentsRepository
