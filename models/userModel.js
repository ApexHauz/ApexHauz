// CONNECTING THE DATABASE
const db = require("./config/db");
const bcrypt = require('bcryptjs')

class User {
    constructor(email, first_name, last_name, password, phone, address, is_admin) {
        this.email = email
        this.first_name = first_name
        this.last_name = last_name
        this.password = password
        this.phone = phone
        this.address = address
        this.is_admin = is_admin
    
    }

    static signupUser(newUser, result) {
        db.query('SELECT * FROM users where email=?', [newUser.email], (err, res) => {
            if (err) {
                console.log("Error", err)
                result(err, null)
                return;
            }else if (res.length) {
                result({ type:"email_taken"}, null)
                return;
            }
        
            bcrypt.hash(newUser.password, 5, (err, hashedPassword) => {
                if (err) {
                    console.log(err)
                    result(err, null)
                    return;
                }

                db.query('INSERT INTO users (email, first_name, last_name, password, phone, address, is_admin) VALUES(?, ?, ?, ?, ?, ?, ?)', [newUser.email, newUser.first_name, newUser.last_name, hashedPassword, newUser.phone, newUser.address, newUser.is_admin], (err, res) => {
                    if (err) {
                        console.log("Error", err)
                        result({ type:"no_signup"}, null)
                        return;
                    }
                    console.log("Sign up successful", {...newUser})
                    result(null, {id:res.insertId, ...newUser})
                })

            })
            
        })
    }

}

module.exports = User;