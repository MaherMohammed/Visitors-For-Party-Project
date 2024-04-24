const db = require("../models");
const Student = db.student;
const Op = db.Sequelize.Op;
// Create and Save a new Student
exports.create = (req, res) => {
  // Validate request
  // console.log(req.body)
  if (!req.body.name && !req.body.number_) {
    res.status(400).send({
      message: "Name and Number can not be empty!"
    });
    return;
  }
  // Create a Student
  const student = {
    number_: req.body.number_,
    name: req.body.name,
    visitor_1_name: req.body.visitor_1_name,
    visitor_1_number: req.body. visitor_1_number,
    attendance_1: req.body.attendance_1 ? req.body.attendance_1 : false,
    visitor_2_name: req.body.visitor_2_name,
    visitor_2_number: req.body.visitor_2_number,
    attendance_2: req.body.attendance_2 ? req.body.attendance_2 : false,
    address_1: req.body.address_1,
    relation_1: req.body.relation_1,
    address_2: req.body.address_2,
    relation_2: req.body.relation_2,
    job_1: req.body.job_1,
    job_2: req.body.job_2

  };
  // Save Student in the database
  Student.create(student)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Student."
      });
    });
};

//search
exports.search = (req, res) => {
    const con = req.params.searchItem
    Student.findAll({ where: {
      [Op.or]:{
        name: {[Op.like]: `%${con}%`},
        number_: {[Op.like]: `%${con}%`},
        visitor_1_number: {[Op.like]: `%${con}%`},
        visitor_2_number: {[Op.like]: `%${con}%`}
      }
    } })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving students."
        });
      });
};





// Find a single Student with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    Student.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Student with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Student with id=" + id
        });
      });
};
// Update a Student by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
    Student.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Student was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Student with id=${id}. Maybe Student was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Student with id=" + id
        });
      });
};
// Delete a Students with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
    Student.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Student was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Student with id=${id}. Maybe Student was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Student with id=" + id
        });
      });
};
exports.getSummary = (req,res) => {
     Student.findAll()
      .then(data => {
        var summary1 = data.filter(function(data_1){
            return data_1.dataValues.attendance_1 == true
        })
        var summary2 = data.filter(function(data_2){
          return data_2.dataValues.attendance_2 == true
      })
        res.send({
          Total: data.length * 2,
          Exists: summary1.length + summary2.length,
          Remaining: data.length * 2 - summary1.length + summary2.length
        });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving students."
        });
      });
};