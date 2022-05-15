const express = require("express");
const router = express.Router();

const adminController = require("../controllers/admin-controller");

router.get('/view-reports', adminController.viewReports);

module.exports = router;