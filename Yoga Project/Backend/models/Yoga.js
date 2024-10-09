const mongoose = require("mongoose");
const schema = mongoose.Schema({
  YogaId:{
    type:String,
    // require:true
  },
  Name: {
    type:String,
    // require:true
    },
  Description:{
    type:String,
    // require:true
    },
  Image:{
    type:String,
    // require:true
    },
    Category:{
        type:String,
        // require:true
    },
    Level:{
        type:String,
        // require:true
    },
    Benefits:{
        type:String,
        // require:true
    },
    Precautions:{
        type:String,
        // require:true
    }
});
module.exports = mongoose.model("yogapose",schema);