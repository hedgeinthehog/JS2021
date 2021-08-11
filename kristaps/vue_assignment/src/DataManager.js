// A very lazy data storage class
export default class DataManager {

    getStudentsList() {
        let data = window.localStorage.getItem("students")
        if (data) {
            return JSON.parse(data)
        }
        else {
            return [
                { id: 0, name: "Anne", surname: "Wattson", age: "33" },
                { id: 1, name: "John", surname: "Fodor", age: "21" }
            ]
        }
    }

    getStudent(id) {
        let students = this.getStudentsList()
        return students.find(student => student.id == id)
    }

    addStudent(name, surname, age) {
        let student = {id:Date.now(), name: name, surname: surname, age: age + ''}
        let studentsList = this.getStudentsList()
        studentsList.push(student)
        this.saveStudentsList(studentsList)
    }

    deleteStudent(id) {
        let students = this.getStudentsList()
        let index = students.findIndex(student => student.id == id) 
        students.splice(index, 1)
        this.saveStudentsList(students)
    }

    updateStudent(updatedStudent) {
        let students = this.getStudentsList()
        let index = students.findIndex(student => student.id == updatedStudent.id) 
        students[index] = updatedStudent
        this.saveStudentsList(students)
    }

    saveStudentsList(studentsList) {
        window.localStorage.setItem("students", JSON.stringify(studentsList))
    }

    getNewsArticleList() {
        let data = window.localStorage.getItem("newsArticles")
        if (data) {
            return JSON.parse(data)
        }
        else {
            return [
                { id: 0, title: "Students are using random text generators to write news articles", article: "Silent sir say desire fat him letter. Whatever settling goodness too and honoured she building answered her. Strongly thoughts remember mr to do consider debating. Spirits musical behaved on we he farther letters. Repulsive he he as deficient newspaper dashwoods we. Discovered her his pianoforte insipidity entreaties. Began he at terms meant as fancy. Breakfast arranging he if furniture we described on. Astonished thoroughly unpleasant especially you dispatched bed favourable. " },
                { id: 1, title: "Breaking News: There are too many bugs", article: "Looking started he up perhaps against. How remainder all additions get elsewhere resources. One missed shy wishes supply design answer formed. Prevent on present hastily passage an subject in be. Be happiness arranging so newspaper defective affection ye. Families blessing he in to no daughter. " }
            ]
        }
    }

    saveNewsArticleList(newsArticleList) {
        window.localStorage.setItem("newsArticles", JSON.stringify(newsArticleList))
    }

}

