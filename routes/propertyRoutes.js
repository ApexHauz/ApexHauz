const express = require("express");
const router = express.Router();
const propertyController = require("../controllers/propertyController");
const verifyToken = require('../middlewares/verifyToken');
const upload = require('../config/multer');

router
  .route("/")
  .get(propertyController.getAllProperties)
  .post(upload.single('image'), verifyToken, propertyController.createPropertyAdvert);

router
  .route("/:propertyId")
  .patch(propertyController.UpdatePropertyAdvert)
  .delete(propertyController.deletePropertyAdvert);

module.exports = router;
