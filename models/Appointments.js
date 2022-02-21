const Sequelize = require("sequelize");
const Patient = require("./Patient");
const sequelize = require("../util/database");

const Appointment = sequelize.define("appointment", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  date: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  // HERE YOU MAY ENTER MORE INFO
  // ex:
});
Appointment.belongsTo(Patient);
module.exports = Appointment;
