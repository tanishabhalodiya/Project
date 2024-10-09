const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
// const userRoute = require('./Routes/Sign_in');
const yogaRoute = require('./Routes/Yoga_pose');
const cors=require('cors');

let port=4001;
mongoose
  .connect(
    "mongodb+srv://23010101021:Bhalodiya%40123@cluster0.bsjmo.mongodb.net/Yoga"
  )
  .then(() => {
    const app = express();
    app.use(cors());  
    app.use(express.urlencoded());
    app.use(express.json());
  
       console.log("Mongoose Connected")
       app.use(bodyParser.urlencoded({extended:false}));
       app.use('/yoga',yogaRoute)
  
      
       app.listen(port,(err)=>{
           console.log("Server Stared at :" + port)
        })
  
  })
  .catch((err) => console.log("Error : ", err));