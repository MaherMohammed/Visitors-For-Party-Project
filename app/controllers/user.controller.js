const db = require("../models");
const User = db.user;
const Op = db.Sequelize.Op;


//login
exports.loginUSer = (req, res) => {
    if (!req.body.username || !req.body.password){
        return res.status(400).json({
            message: "No username or password"
        })
    }
    console.log(User)
    User.findAll({
        where: {
            [Op.and]: {
                username: req.body.username,
                password: req.body.password
            }
        }
    }).then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving the user."
          });
    })
}