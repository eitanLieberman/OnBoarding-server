const router = require("express").Router();
const CryptoJS = require("crypto-js");
const Jwt = require("jsonwebtoken");
const Doctor = require("../models/Doctor");
//this serves as a db database held by the hospital, the doctor can only register with a special id generated for him this array represnts the external db, independent of out DB and probably in sync with the hospital's registered doctors
const doctorDb = ["doc", "doc1", "doc2", "doc3", "doc4", "doc5"];
router.post("/register", async (req, res) => {
  try {
    if (!doctorDb.includes(req.body.docId)) {
      console.log("Not found!");
      return res
        .status(500)
        .json("not registered database, contact your hospital please");
    }
    const newUser = await Doctor.create({
      docId: req.body.docId,

      password: CryptoJS.AES.encrypt(
        req.body.password,
        process?.env?.PASS_SEC || "jhj54765jkkjH"
      ).toString(),
    });
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/login", async (req, res) => {
  const user = await Doctor.findOne({ where: { docId: req.body.docId } });
  if (user === null) {
    console.log("Not found!");
    return res
      .status(500)
      .json("not registered database, contact your hospital please");
  }
  const hashedPassword = CryptoJS.AES.decrypt(
    user.dataValues.password,
    process?.env?.PASS_SEC || "jhj54765jkkjH"
  );
  const passwordO = hashedPassword.toString(CryptoJS.enc.Utf8);

  if (passwordO !== req.body.password) {
    return res.status(401).json("wrong email or password2");
  }
  const accessToken = Jwt.sign(
    { id: user.dataValues.id },
    process?.env?.JWT_SEC || "njkfsjfgnj4h33",
    { expiresIn: "3d" }
  );
  const { password, ...others } = user.dataValues;

  res.status(200).json({ ...others, accessToken });
  console.log("match-------------------------------");
});

module.exports = router;
