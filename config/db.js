const mysql = require("mysql");

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: "",
  database: process.env.DB_NAME,
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Database connection established");
});
