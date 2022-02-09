const dotenv = require("dotenv");
dotenv.config();
const mysql = require("mysql2");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(`onboarding`, "root", `${process.env.MYSQL}`, {
  dialect: "mysql",
});
module.exports = sequelize;
