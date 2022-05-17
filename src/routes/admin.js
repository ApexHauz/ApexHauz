const express = require("express");
const router = express.Router();

const adminController = require("../controllers/admin-controller");
const isLoggedIn = require("./../middleware/isLoggedIn");
const authorize = require("./../middleware/authorize");

router.use(isLoggedIn);

router.get('/view-reports', authorize(), adminController.viewReports);

module.exports = router;