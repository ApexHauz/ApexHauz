const express = require("express");
const router = express.Router();

const authController = require("../controllers/auth-controller");

router.post('/signup', authController.signupUser);

router.post('/signin', authController.signinUser);

router.post('/forgot-password', authController.forgotPassword);

router.post('/reset-password', authController.resetPassword);

router.patch('/change-password', authController.changePassword);

router.post('/signout', authController.signoutUser);

module.exports = router;
