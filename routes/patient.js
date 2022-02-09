const Patient = require("../models/Patient");
const verifyToken = require("./verifyToken");

const router = require("express").Router();

//Create
router.post("/", verifyToken, async (req, res) => {
  const newPatient = new Patient(req.body);

  try {
    const savedPatient = await newPatient.save();
    res.status(200).json(savedPatient);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// UPDATE
router.put("/:id", verifyToken, async (req, res) => {
  try {
    const patient = await Patient.findOne({ where: { id: req.params.id } });
    if (patient === null) {
      console.log("Not found!");
      return res.status(500).json("patient not found");
    }
    const updatedPatient = await patient.set(req.body);
    const savedPatient = await updatedPatient.save();
    res.status(200).json(savedPatient);
  } catch (err) {
    res.status(500).json(err);
  }
});
//DELETE
router.delete("/:id", verifyToken, async (req, res) => {
  try {
    const patient = await Patient.findOne({ where: { id: req.params.id } });
    if (patient === null) {
      console.log("Not found!");
      return res.status(500).json("patient not found");
    }
    await patient.destroy();
    res.status(200).json("Patient has been deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});

// //GET SINGLE Patient
router.get("/find/:id", verifyToken, async (req, res) => {
  try {
    const patient = await Patient.findOne({ where: { id: req.params.id } });
    if (patient === null) {
      console.log("Not found!");
      return res.status(500).json("patient not found");
    }

    res.status(200).json(patient);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/", verifyToken, async (req, res) => {
  try {
    const patients = await Patient.findAll({
      order: [["updatedAt", "DESC"]],
    });

    if (patients === null) {
      console.log("Not found!");
      return res.status(500).json("no patients found");
    }

    return res.status(200).json(patients);
  } catch (err) {
    res.status(500).json("not found");
  }
});

module.exports = router;
