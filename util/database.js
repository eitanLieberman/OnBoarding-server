const dotenv = require("dotenv");
dotenv.config();
const mysql = require("mysql2");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  `onboarding`,
  "guestuser",
  `${process.env.MYSQL || "adfjidosjof32+_w1"}`,
  {
    dialect: "mysql",
  }
);
module.exports = sequelize;
