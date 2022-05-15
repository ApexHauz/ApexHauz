const express = require("express");
const router = express.Router();

const propertyController = require("./../controllers/property-controller");

router
  .route("/")
  .get(propertyController.getAllProperties)
  .post(propertyController.createProperty)

router.get('/search', propertyController.searchPropertyByType)

router
  .route("/:propertyId")
  .get(propertyController.getSingleProperty)
  .put(propertyController.updateProperty)
  .delete(propertyController.deleteProperty)

router.patch('/:propertyId/sold', propertyController.markPropertyAsSold)

module.exports = router;
