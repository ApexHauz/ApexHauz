const express = require("express");
const router = express.Router();

const authController = require("../controllers/auth-controller");
const isLoggedIn = require("./../middleware/isLoggedIn");
// const authorize = require("./../middleware/authorize");

router.post('/signup', authController.signupUser);

router.post('/signin', authController.signinUser);

router.post('/signout', authController.signoutUser);

router.post('/forgot-password', authController.forgotPassword);

router.post('/reset-password', authController.resetPassword);

// router.use(isLoggedIn);

router.patch('/change-password', isLoggedIn, authController.changePassword);

module.exports = router;
