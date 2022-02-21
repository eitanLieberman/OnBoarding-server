const Appointment = require("../models/Appointments");
const verifyToken = require("./verifyToken");
const Patient = require("../models/Patient");
const router = require("express").Router();
const { Op } = require("sequelize");

//Create
router.post("/", verifyToken, async (req, res) => {
  const newAp = new Appointment(req.body);

  try {
    const savedPatient = await newPatient.save();
    res.status(200).json(savedPatient);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
module.exports = router;
