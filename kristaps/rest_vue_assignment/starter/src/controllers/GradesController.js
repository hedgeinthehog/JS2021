const express = require("express");

const GradesRepository = require("../repositories/GradesRepository");

const router = express.Router();

// GET a specific item
// full path is: [GET] /students-management/students/:studentId/grades
router.get("/:id/grades", async (req, res) => {
  const data = await GradesRepository.getStudentGrades(req.params.id);
  if (data) {
    res.status(200).json(data);
  } else {
    res.status(404).json({
      error: "incorrect id",
    });
  }
});

module.exports = router;
