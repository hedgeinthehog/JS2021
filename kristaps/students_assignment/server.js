require("dotenv").config();

const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const StudentsController = require("./app/controllers/StudentsController");

const studentsController = new StudentsController();

const server = express();

// set templating engine
server.set("view engine", "ejs");
// change default location of templating engine views
server.set("views", path.resolve(__dirname, "app/views"));

server.use(express.static(path.resolve(__dirname, "assets")));

// used to parse req.body for POST,PUT requests
server.use(bodyParser.urlencoded({ extended: false }));


// routing

// home page
server.get("/", function (req, res) {
  res.render("pages/index", { content: "This is home" });
});

// saves student edit form data
server.post("/students/edit", studentsController.save) 
// ID provided - edit studemt, not provided - create student
server.get("/students/edit/:studentId?", studentsController.renderForm); 
// delete request
server.get("/students/delete/:id", studentsController.delete);
// ID provided - student displayed, not provided - list displayed
server.get("/students/:studentId?", studentsController.main);


// 404 page
server.use("*", function (req, res) {
  res.render("pages/error");
});


// start server
const port = 80;
server.listen(port, function () {
  console.log(`Server running at http://localhost:${port}`);
});