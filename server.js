// Configuring environment variables
require("dotenv").config();

// Setting up express
const express = require("express");
const app = express();

// Express async error handling
require('express-async-errors')


// Errors
const AppError = require("./src/errors/AppError");
const errorHandler = require("./src/errors/error-handler");


// CONNECTING THE DATABASE
require("./src/config/db");

// SETTING STATIC FOLDER
app.use(express.static("public"));

// SETUP EJS
app.set("view engine", "ejs");

// SETUP EXPRESS BODY PARSER FOR JSON DATA
app.use(express.json());



// CONFIGURING ROUTES

app.use('/api/v1/auth', require('./src/routes/auth')) // AUTH Endpoint

app.use('/api/v1/property', require('./src/routes/property')); // PROPERTY Endpoint

app.use('/api/v1/admin', require('./src/routes/admin')) // ADMIN Endpoint

// 404 Error Handler
app.all('*', (req, res) => {
  throw new AppError(404, "This page is not found in this server");
})

// Global Error Handler
app.use(errorHandler);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server listening on port http://localhost/${PORT}`)
);
