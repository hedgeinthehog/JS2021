const fs = require("fs")
const path = require("path")
// const FileStorage = require("../utils/FileStorage")
const StudentDatabaseStorage = require("../database/StudentDatabaseStorage")
const Student = require("../models/Student")


class StudentsRepository {
    constructor() {
        this.dataStorage = new StudentDatabaseStorage("students")
        // this.dataStorage = new FileStorage("students")
    }

    async getAllStudents() {
        const students = await this.dataStorage.getAll()
        return students.map(data => new Student(data))
    }

    async getStudentById(id) {
        const data = await this.dataStorage.getById(id)
        if(data){
            return new Student(data);
        }
    }

    async saveStudent(data){
        const student = new Student(data)
        if(data.id){
            await this.dataStorage.update(student)
        } 
        else {
            await this.dataStorage.create(student)
        }
    }

    async deleteStudent(id){
        await this.dataStorage.delete(id)
    }

}

module.exports = StudentsRepository