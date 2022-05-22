<<<<<<< HEAD
// Configuring environment variables
require("dotenv").config();

// Setting up express
const express = require("express");
const app = express();

// Express async error handling
require("express-async-errors");

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
=======
const express = require('express');
const cors = require('cors');
const userRoutes = require('./src/routes/user.routes');
const propertyRoutes = require('./src/routes/property.routes');
const reportRoutes = require('./src/routes/report.routes')

const app = express();
const port = process.env.PORT || 7000;
>>>>>>> ea48f7e8e684f11a05402e1bad02ee43743904ad

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

<<<<<<< HEAD
// CONFIGURING USER ROUTES
app.use("/api/v1/auth", userRoutes);
app.use("/api/v1/auth", userRoutes);
// CONFIGURING ROUTES

app.use("/api/v1/auth", require("./src/routes/auth")); // AUTH Endpoint

app.use("/api/v1/property", require("./src/routes/property")); // PROPERTY Endpoint

app.use("/api/v1/admin", require("./src/routes/admin")); // ADMIN Endpoint

// 404 Error Handler
app.all("*", (req, res) => {
  throw new AppError(404, "This page is not found in this server");
});

// Global Error Handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server listening on port http://localhost/${PORT}`)
);
=======
app.get('/', (req, res) => {
    //console.log(req);
    res.send({"Message" : "Welcome to ApexHauz! A home of property sales and rentals."})
})

app.use(userRoutes);
app.use(propertyRoutes);
app.use(reportRoutes);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})
>>>>>>> ea48f7e8e684f11a05402e1bad02ee43743904ad
