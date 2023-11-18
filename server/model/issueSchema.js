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
        default: Date.now()
    },
    returnDate:{
        type: Date
    },
    status:{
        type: String,
        enum: ['Pending', 'Approved','Returned'],
        default:'Pending',
    }
})

const Issue = mongoose.model('issue', IssueSchema);
module.exports = Issue;