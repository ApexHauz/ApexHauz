const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");

router.route("/login").post(userController.userLogin);

router.route("/signup").post(userController.registerUser);

module.exports = router;
