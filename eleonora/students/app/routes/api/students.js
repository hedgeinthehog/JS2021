var express = require('express');
var router = express.Router();

const StudentsController = require('../../controllers/StudentsController');
const studentsController = new StudentsController();

router.get('/', studentsController.getAll)
  .post('/', studentsController.createStudent);
router.get('/create', studentsController.renderForm);
router.get('/:id', studentsController.getOne);

module.exports = router;