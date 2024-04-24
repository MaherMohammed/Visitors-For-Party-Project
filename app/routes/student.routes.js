module.exports = app => {
    const students = require("../controllers/student.controller.js");
    var router = require("express").Router();
    // Create a new Student
    router.post("/", students.create);
    // search
    // router.get("/search/:searchItem", students.findAllByName);
    router.get("/search/:searchItem", students.search);

    router.get("/summary", students.getSummary);
    // Retrieve a single Student with id
    router.get("/:id", students.findOne);
    // Update a Student with id
    router.put("/:id", students.update);
    // Delete a Student with id
    router.delete("/:id", students.delete);
    app.use('/api/student', router);
  };