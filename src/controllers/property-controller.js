////////////////////////////
// PROPERTY CONTROLLER
////////////////////////////


// @Route GET .../api/v1/property
// @desc Get all properties
exports.getAllProperties = (req, res) => {
  res.send("Get all properties");
};


// @Route GET .../api/v1/property/:propertyId
// @desc Get a single property
exports.getSingleProperty = (req, res) => {
  res.send("Get a single property");
};


// @Route GET .../api/v1/property/search?type=propertyType
// @desc Search for a property by type
exports.searchPropertyByType = (req, res) => {
  res.send("Search for a property by type");
};


// @Route POST .../api/v1/property
// @desc Create a new property
exports.createProperty = (req, res) => {
  res.send("Create a new property");
};


// @Route PUT .../api/v1/property/:propertyId
// @desc Update a property Details
exports.updateProperty = (req, res) => {
  res.send("Update a property");
};


// @Route PATCH .../api/v1/property/:propertyId/sold
// @desc Mark a property as sold
exports.markPropertyAsSold = (req, res) => {
  res.send("Mark a property as sold");
};


// @Route DELETE .../api/v1/property/:propertyId
// @desc Delete a property
exports.deleteProperty = (req, res) => {
  res.send("Delete a property");
};