const mongoose=require("mongoose");

const IssueSchema = new mongoose.Schema({
    book:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref:"AllBooks"
    },
    student:{
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'USER'
    },
    issueDate:{
        type: Date
    },
    requestedDate:{
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

const Issue = mongoose.model('ISSUE', IssueSchema);
module.exports = Issue;