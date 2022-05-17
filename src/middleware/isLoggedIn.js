// Authentication middleware
const jwt = require('jsonwebtoken')
const AppError = require('./../errors/AppError')
const connection = require('./../config/db')

const isLoggedIn = (req, res, next) => {
    // Checking if the token is present or not
    // # req.headers['auth-token']
    // # req.cookies.token 
    // # req.body.token

    const token = req.headers['auth-token'] || '';
    if (!token) throw new AppError(401, 'You are not logged in!');

    // Verifying the token
    let decoded;
    jwt.verify(token, process.env.JWT_SECRET, (err, result) => {
        if (err) throw new AppError(401, 'The token is Invalid, Login again!');
        decoded = result;
    })


    // Check if the user still exists in the database
    let user;
    const sql = "SELECT * FROM users WHERE id = ?"
    connection.query(sql, decoded.id, (err, result) => {
        if (err) throw new AppError(401, 'User record no longer found!');
        user = result;
    })

    // If everything is fine, then pass the user to req.user and move to the next middleware
    req.user = user;
    next()
}

module.exports = isLoggedIn;