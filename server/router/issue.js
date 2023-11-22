const express = require('express');
const router = express.Router();

const Issue = require("../model/issueSchema");
const Book = require("../model/bookSchema");

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
            await Book.updateOne({_id:book},{$inc:{copies:-1}});
            await Book.updateOne({_id:book,copies:0},{$set:{status:"unavailable"}});
            return res.status(200).json({msg:"Successfully issued!"});
        }
    }catch(error){
        console.log(error);
    }
})

router.put("/issueBook",async(req,res)=>{
    const {id} = req.query;
    if(!id){
        return res.status(409).json({msg:"id is missing"});
    }
    try{
        await Issue.updateOne({_id:id},{$set:{status:"Approved"}});
        return res.status(200).json({msg:"modified sucessfully"});
    }catch(err){
        console.log(err);
    }
})

router.delete("/issueBook",async(req,res)=>{
    const {id} = req.query;
    if(!id){
        return res.status(409).json({msg:"id is missing"});
    }
    try{
        const bookid = await Issue.findOne({_id:id});
        await Issue.deleteOne({_id:id});
        await Book.updateOne({_id:bookid.book},{$inc:{copies:+1}});
        return res.status(200).json({msg:"deleted sucessfully"});
    }catch(err){
        console.log(err);
    }
})

module.exports = router;