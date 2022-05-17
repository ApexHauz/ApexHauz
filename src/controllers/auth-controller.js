////////////////////////////
// AUTH CONTROLLER
////////////////////////////


// @Route POST .../api/v1/auth/signup
// @desc Signup a new user
exports.signupUser = (req, res) => {
  res.send("Signup a new user");
};


// @Route POST .../api/v1/auth/signin
// @desc Login a user
exports.signinUser = (req, res) => {
  res.send("Login a user");
};



// @Route POST .../api/v1/auth/forgot-password
// @desc Forgot password
exports.forgotPassword = (req, res) => {
  res.send("Forgot password");
};


// @Route POST .../api/v1/auth/reset-password
// @desc Reset password
exports.resetPassword = (req, res) => {
  res.send("Reset password");
};


// @Route PATCH .../api/v1/auth/change-password
// @desc Change password
exports.changePassword = (req, res) => {
  res.send("Change password");
};


// @Route POST .../api/v1/auth/signout
// @desc Logout a user
exports.signoutUser = (req, res) => {
  res.send("Logout a user");
};