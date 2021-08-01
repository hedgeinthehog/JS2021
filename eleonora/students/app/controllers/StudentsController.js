const Students = require('../models/Students');

class StudentsController {
  async getAll (_, res, next) {
    try {
      const students = await Students.getAll();
      res.render('pages/students', { students });
    } catch (e) {
      next(e);      
    }   
  };
      
  async getOne (req, res, next) {
    const { id } = req.params;
    try {
      const student = await Students.getById(id);
      if (student) {
        res.render('pages/student', {student});
      } else {
        next();
      }
    } catch (e) {
      next(e);      
    }
  };
  
  async createStudent (req, res, next) {
    try {
      await Students.createStudent(req.body);
      
      const faculties = await Students.getFaculties();
      res.render('pages/addStudent', { faculties });
    } catch (e) {
      next(e);      
    }
  };

  async renderForm (_, res, next) {
    try {
      const faculties = await Students.getFaculties();
      res.render('pages/addStudent', { faculties });     
    } catch (e) {
      next(e)
    }
  }
}

module.exports = StudentsController;