const express = require("express");
const router = express.Router();
const schema = require('../models/Sign_in')

router.post("/", async (req, res) => {
  try {
    const email = await schema.findOne({ Email: req.body.email });
    if (email) {
      res.send("Email is already exits");
    }
    await schema.create(...req.body).save();
    res.send("account is created");
  } catch {
    res.send("Server error......");
  }
});

router.get("/getuser", async (req, res) => {
  const user = await schema.find({});
  res.send(user)

})

module.exports = router;
