const Grade = require("../models/Grade");
const MemoryStorage = require("../storages/MemoryStorage");

// knowledge of how and where to store data
class StudentsRepository {
  constructor() {
    this._storage = new MemoryStorage("grades");
  }

  async getStudentGrades(student_id) {
    try {
      const data = await this._storage.getAll();
      const studentGrades = data
        .map((grade) => new Grade(grade).getData())
        .filter((grade) => Number(grade.student_id) === Number(student_id));
      return studentGrades;
    } catch (error) {
      return [];
    }
  }
}

module.exports = new StudentsRepository();
