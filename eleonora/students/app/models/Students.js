const db = require('../../db');

class Students {
  constructor(db) {
    this.db = db;
  }

  getAll() {
    return new Promise((resolve, reject) => {
      this.db.query(
        `SELECT * FROM students`,
        (e, rows) => {
          if (e) {
            return reject(e);
          };

          return resolve(rows.length ? rows : null)
        });
    })
  }

  getById(id) {
    return new Promise((resolve, reject) => {
      this.db.query(
        `SELECT s.name, s.surname, s.gender, s.age, f.name AS faculty FROM students s INNER JOIN faculties f ON s.id_faculty = f.id_faculty WHERE s.id_student = ?;`,
        [id],
        (e, rows) => {
          if (e) {
            return reject(e);
          };

          return resolve(rows[0]);
        });
    })
  }

  createStudent({ name, surname, gender, age, faculty }) {
    return new Promise((resolve, reject) => {
      this.db.query(
        `INSERT INTO students VALUES (DEFAULT, ?, ?, ?, ?, ?)`,
        [name, surname, gender, age, faculty],
        (e, rows) => {
          if (e) {
            return reject(e);
          };

          return resolve(rows);
        });
    })
  }

  getFaculties() {
    return new Promise((resolve, reject) => {
      this.db.query(
        `SELECT id_faculty, name FROM faculties`,
        (e, rows) => {
          if (e) {
            return reject(e);
          };

          return resolve(rows);
        });
    })
  }
}

module.exports = new Students(db);