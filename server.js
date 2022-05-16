// Configuring environment variables
require("dotenv").config();

const express = require("express");
const app = express();
const userRoutes = require("./routes/userRoutes");
const propertyRoutes = require("./routes/propertyRoutes");
const PORT = 5000 || process.env.PORT;


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CONFIGURING USER ROUTES
app.use("/api/v1/auth", userRoutes);
app.use("/api/v1/auth", userRoutes);

// CONFIGURING PROPERTY ROUTES
app.use("/property", propertyRoutes);
app.use("/property/:propertyId", propertyRoutes);

app.listen(PORT, () =>
  console.log(`Server listening on port http://localhost/${PORT}`)
);
