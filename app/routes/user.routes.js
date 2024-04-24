module.exports = app => {
    const users = require("../controllers/user.controller.js");
    var router = require("express").Router();
    
    router.get("/login", users.loginUSer);
    app.use('/api/user', router);
  };