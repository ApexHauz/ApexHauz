const express = require("express");
const router = express.Router();

const propertyController = require("../controllers/propertyController");

router
  .route("/")
  .get(propertyController.getAllProperties)
  .post(propertyController.createPropertyAdvert);

router
  .route("/:propertyId")
  .patch(propertyController.UpdatePropertyAdvert)
  .delete(propertyController.deletePropertyAdvert);

module.exports = router;
