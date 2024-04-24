module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
    username: {
        type: Sequelize.STRING
    },
    password: { 
        type: Sequelize.STRING
    },
    isAdmin: {
        type: Sequelize.BOOLEAN
    }
     
    });
    return User;
  };