//also get a secret sms
const Sequelize = require("sequelize");

const sequelize = require("../util/database");

const Doctor = sequelize.define("doctor", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  docId: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
});

module.exports = Doctor;
