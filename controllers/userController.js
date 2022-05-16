const jwt = require('jsonwebtoken');
const User = require('./models/userModel');
const dotenv = require('dotenv');

dotenv.config()

exports.registerUser = (req, res) => {
    if (!req.body) {
        res.status(400).send({"Message":"Please fill all fields"})
    }else {
        const {email, first_name, last_name, password, phone, address, is_admin} = req.body;
        const user = new User(email, first_name, last_name, password, phone, address, is_admin)
        User.signupUser(user, (err, data) => {
            if (err && err.type == "email_taken") {
                res.status(400).send({"Message" : "That email has already been taken"})
            }else if (err && err.type == "no_signup") {
                res.status(500).send({"Message" : "Unable to sign you up. Try again later"})
            }else {
                jwt.sign({user:data}, process.env.JWT_KEY, (err, token) => {
                    if (err) {
                        console.log(err)
                        res.status(500).send({"Message": "Server error! Please try again later"})
                    }
                    res.send({"status": "success", "data": {token:token, ...data}})    
                })
            }
        })
    }
}