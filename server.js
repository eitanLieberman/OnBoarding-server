const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();
const PORT = process.env.PORT || 5000;
const app = express();
const bodyParser = require("body-parser");

// const db = require('./util/database');
app.use(cors());
app.use(express.json());

const mysql = require("mysql2");
app.listen(PORT, () => {
  console.log("backend server running! " + PORT);
});
