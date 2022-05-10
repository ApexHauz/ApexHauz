module.exports = {
  registerUser: (req, res) => {
    res.render("index");
  },

  userLogin: (req, res) => {
    res.send("User Login Successful");
  },
};
