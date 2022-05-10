// Configuring environment variables
require("dotenv").config();

const express = require("express");
const app = express();
const userRoutes = require("./routes/userRoutes");
const propertyRoutes = require("./routes/propertyRoutes");
const PORT = 3000 || process.env.PORT;

// CONNECTING THE DATABASE
require("./config/db");

app.use(express.json());

// CONFIGURING USER ROUTES
app.use("/api/v1", userRoutes);
app.use("/api/v1/:userId", userRoutes);

// CONFIGURING PROPERTY ROUTES
app.use("/property", propertyRoutes);
app.use("/property/:propertyId", propertyRoutes);
app.listen(PORT, () =>
  console.log(`Server listening on port http://localhost/${PORT}`)
);
