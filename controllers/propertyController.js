module.exports = {
  getAllProperties: (req, res) => {
    res.json({ message: "All properties" });
  },

  createPropertyAdvert: (req, res) => {
    res.json({ message: "Property Advert Created" });
  },

  UpdatePropertyAdvert: (req, res) => {
    res.json({ message: "Property Advert Updated" });
  },

  deletePropertyAdvert: (req, res) => {
    res.json({ message: "Property Advert Deleted" });
  },
};
