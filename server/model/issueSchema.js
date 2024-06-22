const mongoose=require("mongoose");

const IssueSchema = new mongoose.Schema({
    book:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref:"allbook"
    },
    student:{
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'user'
    },
    issueDate:{
        type: Date,
        default: ""
    },
    returnDate:{
        type: Date,
        default: ""
    },
    returnedDate:{
        type:Date,
        default:""
    },
    status:{
        type: String,
        enum: ['Pending', 'Approved','Returned'],
        default:'Pending',
    },
    fine:{
        type:Number,
        default:0
    }
})

const Issue = mongoose.model('issue', IssueSchema);
module.exports = Issue;