// Configuring environment variables
require("dotenv").config();

const express = require("express");
const app = express();

// CONNECTING THE DATABASE
require("./config/db");

const PORT = 3000 || process.env.PORT;

app.listen(PORT, () =>
  console.log(`Server listening on port http://localhost/${PORT}`)
);
