const express = require("express");
const router = express.Router();

const propertyController = require("./../controllers/property-controller");
const isLoggedIn = require("./../middleware/isLoggedIn");
const authorize = require("./../middleware/authorize");

router
  .route("/")
  .get(propertyController.getAllProperties)
  .post(isLoggedIn, propertyController.createProperty)

router.get('/search', propertyController.searchPropertyByType)

router
  .route("/:propertyId")
  .get(propertyController.getSingleProperty)
  .put(isLoggedIn, propertyController.updateProperty)
  .delete(isLoggedIn, propertyController.deleteProperty)

router.patch('/:propertyId/sold', isLoggedIn, propertyController.markPropertyAsSold)

module.exports = router;
