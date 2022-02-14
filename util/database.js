const dotenv = require("dotenv");
dotenv.config();
const mysql = require("mysql2");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  `heroku_1679b0c0118b04e`,
  "bd7687ba71b28a",
  `${process.env.MYSQL}`,
  {
    host: "eu-cdbr-west-02.cleardb.net",
    port: "3306",
    dialect: "mysql",
  }
);
module.exports = sequelize;
