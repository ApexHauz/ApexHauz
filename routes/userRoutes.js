const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");

router.route("/").get(userController.userLogin);

router.route("/:userId").get(userController.registerUser);

module.exports = router;
