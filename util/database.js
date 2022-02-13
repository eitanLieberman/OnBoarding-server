const dotenv = require("dotenv");
dotenv.config();
const mysql = require("mysql2");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  `onboarding`,
  "guestuser",
  `${process.env.MYSQL}`,
  {
    host: "Eitans-MacBook-Air.local",
    port: "3306",
    dialect: "mysql",
  }
);
module.exports = sequelize;
