const express = require('express');
const router = express.Router();

const Issue = require("../model/issueSchema");

require('../db/conn');
router.get('/issueBook',async(req, res) =>{
    const {book, student, issueDate, returnDate, status} = req.query;
    const queryObj = {};
    if(book){
        queryObj.book = book;
    }
    if(student){
        queryObj.student = student;
    }
    if(issueDate){
        queryObj.issueDate = issueDate;
    }
    if(returnDate){
        queryObj.returnDate = returnDate;
    }
    if(status){
        queryObj.status = status;
    }
    const data = await Issue.find(queryObj).populate("book").populate("student","name regno");
    res.status(200).json({data})
})
router.post('/issueBook',async(req, res) => {
    const {book, student, issueDate, returnDate, status} = req.body;
    if(!book || !student){
        return res.status(401).json({msg: "Please provide book and student details"});
    }
    try{
        const alreadyfound = await Issue.findOne({book: book, student: student});
        if(alreadyfound){
            return res.status(409).json({msg:"Already issued to this student!"});
        }
        else{
            const newIssue = new Issue({book:book, student:student});
            await newIssue.save();
            return res.status(200).json({msg:"Successfully issued!"});
        }
    }catch(error){
        console.log(error);
    }
})

module.exports = router;