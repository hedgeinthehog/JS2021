const Student = require("../models/Student");
const StudentsRepository = require("../repositories/StudentsRepository");
const studentsRepository = new StudentsRepository();


class StudentsController {
    async main(req, res) {
        const { studentId } = req.params;

        if (studentId) {
            const student = await studentsRepository.getStudentById(studentId);
            console.log(student)
            if (student) {
                res.render("pages/student", { student });
            } 
            else {
                res.render("pages/error");
            }
        } 
        else {
            const students = await studentsRepository.getAllStudents()
            res.render("pages/students", { students });
        }
    }

    async renderForm(req, res) {
        const { studentId } = req.params;
        let student
        if(studentId){
            student = await studentsRepository.getStudentById(studentId)
        }
        if (!student){
           student = new Student({}) 
        }
        console.log(student)
        res.render("pages/studentEdit", {student})
    }

    // I am using same form for update and create
    async save(req, res) {
        await studentsRepository.saveStudent(req.body)
        res.redirect((req.body.id) ? `/students/${req.body.id}` : "/students")
    }

    async delete(req, res) {
        await studentsRepository.deleteStudent(req.params.id)
        res.redirect("/students")
    }
}

module.exports = StudentsController