const express = require("express");

const StudentsRepository = require("../repositories/StudentsRepository");
const addMetaData = require("../utils/addMetaData");

const router = express.Router();

// GET list all students
router.get("/", async (req, res) => {
  const data = await StudentsRepository.getAll(req.query);
  res.status(200).json(
    addMetaData(req, res, data)
  );
});

// GET a specific item
router.get("/:id", async (req, res) => {
  const data = await StudentsRepository.getById(req.params.id);
  if (data) {
    res.status(200).json(
      addMetaData(req, res, data)
    );
  } else {
    res.status(404).json({
      error: "incorrect id",
    });
  }
});

// POST - create a new student
router.post("/", async (req, res) => {
  const data = await StudentsRepository.create(req.body);
  if (data) {
    res.status(201).json(data);
  } else {
    res.status(401).json({
      error: "bad request",
    });
  }
});

// PUT - update a specific student
router.put("/:id", async (req, res) => {
  const data = await StudentsRepository.update(req.params.id, req.body);
  if (data) {
    res.status(200).json(data);
  } else {
    res.status(401).json({
      error: "bad request",
    });
  }
});

// DELETE - delete a specific student
router.delete("/:id", async (req, res) => {
  await StudentsRepository.delete(req.params.id);
  res.sendStatus(204);
});


module.exports = router;
