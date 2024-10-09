const mongoose = require("mongoose");
const schema = mongoose.Schema({
  UserName: {
    type:String
  },
  Password: {
    type:String
},
  Email:{
    type:String
  }
});
module.exports = mongoose.model("user",schema);