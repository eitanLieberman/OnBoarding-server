const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const Patient = require("./models/Patient");
const Doctor = require("./models/Doctor");
const Appointment = require("./models/Appointments");
const authRoute = require("./routes/auth");
const patientRoute = require("./routes/patient");
dotenv.config();
const PORT = process.env.PORT || 8080;
const app = express();
const bodyParser = require("body-parser");

const sequelize = require("./util/database");
app.use(cors());

app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/patients", patientRoute);

//comment in alter if you need extra patient details
sequelize.sync(/*{ alter: true }*/).then((result) => {
  // console.log(result);
  app.listen(PORT, () => {
    console.log("backend server running! " + PORT);
  });
});
