const Sequelize = require("sequelize");

const sequelize = require("../util/database");

const Patient = sequelize.define("patient", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  sex: Sequelize.STRING,
  fullName: Sequelize.STRING,
  age: {
    type: Sequelize.DOUBLE,
    allowNull: false,
  },
  operation: Sequelize.STRING,
  nativeLanguage: Sequelize.STRING,

  // HERE YOU MAY ENTER MORE INFO
  // ex:
  // extraDetail: {
  //   type: Sequelize.STRING,
  //   allowNull: true,
  // },
});

module.exports = Patient;
