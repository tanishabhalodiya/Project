const express = require("express");
const router = express.Router();
const Yoga = require('../models/Yoga');
// GET all places
router.get('/allyoga', async (req, res) => {
  try {
    const yogaposes = await Yoga.find({});
    console.log("yoga are yoga:", yogaposes);

    res.status(200).json(yogaposes); // Return the fetched places
  } catch (error) {
    console.error("Error fetching yoga:", error);
    res.status(500).send("Server error...");
  }
});

//get by Id 
router.get('/:yogaId', async (req, res) => {
  try {
    const yogaposes = await Yoga.findOne({YogaId:req.params.yogaId});
    console.log("Fetched yoga:", yogaposes);
    
    // res.send(yogaposes)
    res.json(yogaposes); // Return the fetched places
  } catch (error) {
    console.error("Error fetching yoga:", error);
    res.status(500).send("Server error...");
  }
});

//add yoga pose
  router.post('/addyoga',async (req, res) => {   
    try {
      const yoga = new Yoga({
        ...req.body
      }).save();
      console.log("Fetched Yoga:",yoga);
    
      res.status(200).json("added"); // Return the fetched places
    } catch (error) {
      console.error("Error fetching places:", error);
      res.status(500).send("Server error...");
    }
  });

  //edit yoga pose

  // router.patch('/update/:yogaId',async(req,res)=>{
  //   const y = await Yoga.findOneAndUpdate({YogaId:req.params.yogaId},req.body)
  //   res.json(y)
  // })

  router.patch('/update/:yogaId', async (req, res) => {
    console.log("Update data : ",req.params); // Log params to see what is being passed
    const y = await Yoga.findOneAndUpdate({ YogaId: req.params.yogaId }, req.body);
    res.json(y);
});

  //delete yoga pose
  router.delete('/deleteyoga/:yogaId',async(req,res)=>{
    try {
      const deleteyoga = await Yoga.deleteOne({YogaId:req.params.yogaId});
      res.status(200).json("deleted");
    } catch (error) {
      console.error("Error fetching yoga:", error);
      res.status(500).send("Server error...");
    }
  })
  
module.exports=router;
