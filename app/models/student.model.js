module.exports = (sequelize, Sequelize) => {
    const Student = sequelize.define("student", {
      number_: {
        type: Sequelize.INTEGER
        // raqm 3am
      },
      name: {
        type: Sequelize.STRING
      },
      visitor_1_name:{
        type: Sequelize.STRING
      },
      visitor_1_number: {
        type: Sequelize.STRING
      },
      attendance_1: {
        type: Sequelize.BOOLEAN
      },
      address_1:{
        type: Sequelize.STRING
      },
      relation_1: {
        type: Sequelize.STRING
      },
      job_1: {
        type: Sequelize.STRING
      },
      visitor_2_name:{
        type: Sequelize.STRING
      },
      visitor_2_number: {
        type: Sequelize.STRING
      },
      attendance_2: {
        type: Sequelize.BOOLEAN
      },
      address_2:{
        type: Sequelize.STRING
      },
      relation_2: {
        type: Sequelize.STRING
      },
      job_2: {
        type: Sequelize.STRING
      }

    });
    return Student;
  };