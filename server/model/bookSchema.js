const mongoose=require("mongoose");

const BookSchema = new mongoose.Schema({
  bookid:{
    type:String,
    required:true
  },
  title:{
    type:String,
    required:true
  },
  author:{
    type:String,
    required:true
  },
  copies:{
    type:Number,
    required:true
  },
  status:{
    type:String,
    required:true
  },
  branch:{
    type:String,
    required:true
  },
  location:{
    type:String,
    required:true
  },
}) 
module.exports = mongoose.model("allbook",BookSchema);