const express = require('express');
const router = express.Router();

// include controllers
const StudentsCtlr = require('../controllers/StudentsController');
const GradesCtlr = require('../controllers/GradesController');

// define paths to controllers

// main CRUD for students
router.use('/students-management/students', StudentsCtlr);
// additional requests for student grades
router.use('/students-management/students', GradesCtlr);
// inside using: [GET] /students-management/students/:studentId/grades
// [GET] /students-management/grades/:studentId 
// [GET] /students-management/grades/:id 


// fallback to error message

router.use("*", (req, res) => {
    res.status(404);
    res.json({
      error: "unknown route",
    });
  });

module.exports = router;
