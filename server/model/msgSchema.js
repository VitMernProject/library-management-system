const mongoose=require("mongoose");
const { translateAliases } = require("./bookSchema");

const msgSchema = new mongoose.Schema({
    student:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'user'
    },
    msg:{
        type:String,
        required:true     
    },
    date: {
        type:Date,
        default: Date.now()
    }
})

const Msg=mongoose.model('message',msgSchema);
module.exports=Msg;

