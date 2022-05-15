const express = require("express");
const router = express.Router();

// Remove this Later :::::::::::::::::
const jwt = require("jsonwebtoken");

const authController = require("../controllers/auth-controller");
const isLoggedIn = require("./../middleware/isLoggedIn");

router.post('/signup', authController.signupUser);

router.post('/signin', authController.signinUser);

router.post('/signout', authController.signoutUser);

router.post('/forgot-password', authController.forgotPassword);

router.post('/reset-password', authController.resetPassword);

// router.use(isLoggedIn);

router.patch('/change-password', isLoggedIn, authController.changePassword);


// Remove this endpoint Later :::::::::::::::::::
router.get('/create-token', (req, res) => {

    // User Object
    const user = {
        id: 1,
        name: "John Doe",
        is_admin: true
    }
    // Create a token
    const token = jwt.sign({ user }, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Send to header['auth-token']
    res.set('auth-token', token);

    // Send to cookie
    res.cookie('token', token, {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 * 7
    });

    return res.send('Token Created');

})

module.exports = router;
