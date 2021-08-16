class Student {
    constructor(data) {
        this.id = data['id']
        this.name = data['name']
        this.surname = data['surname']
        this.age = data['age']
        this.gender = data['gender']
    }

    // dummy 'business logic'
    getFullName(){
        return `${this.name} ${this.surname}`
    }
}

module.exports = Student