const express = require('express');
const router = express.Router();


require('../db/conn');
const Book = require("../model/bookSchema");
const Issue = require('../model/issueSchema');

router.get("/getBooks",async(req,res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.status(200).json({message:"Get Books route run successfully"});
})
router.get('/getAllBooks', async(req,res)=>{
  res.set('Access-Control-Allow-Origin', '*');
  try{
      const search = req.query.search || "";
      const Books = await Book.find({bookid:{$regex:search,$options:'i'}});
      if(Books){
          return res.status(200).json({data:Books});
      }
      else{
          return res.status(400).json({message:'No Data!!'});
      }
  }
  catch(error){
      console.log(error);
  }
})

router.put("/updatebook",async(req,res)=>{
  res.set('Access-Control-Allow-Origin', '*');
  const {bookid,title,author,copies,status,branch,location} = req.body;
  try{
    await Book.updateOne({_id:bookid},{$set:{copies:copies,status:status,location:location}});
  }catch(err){
    console.log(err);
  }
  res.status(200).json({msg:"updated"});
})

router.delete("/deleteBook",async(req,res)=>{
  res.set('Access-Control-Allow-Origin', '*');
  const id = req.query.id;
  try{
    await Book.deleteOne({_id:id});
    await Issue.deleteMany({book:id});
    return res.status(200).json({msg:"deleted"});
  }catch(err){
    console.log(err);
  }
})

router.post("/addbook",async(req,res) => {
  res.set('Access-Control-Allow-Origin', '*');
  const {bookid,title,author,copies,status,branch,location} = req.body;
  if (!bookid || !title || !author || !copies || !status || !branch || !location){
    return res.status(422).json({message:"Fields are missing!!"});
  }
  try{
    const bookexist = await Book.findOne({bookid:bookid});
    if(bookexist){
      res.status(422).json({message:"Book already exists!!"});
    }
    else{
      const newbook = new Book({bookid,title,author,copies,status,branch,location});
      await newbook.save();
      res.status(200).json({message:"Book added successfully!!"});
    }
  }
  catch(err){
    console.log(err);
  }
})

router.get("/getRecomendedBooks",async(req,res)=>{
  res.set('Access-Control-Allow-Origin', '*');
    const cseBooks = await Book.find({branch:"CSE"}).limit(5);
    const eceBooks = await Book.find({branch:"ECE"}).limit(5);
    const mathBooks = await Book.find({branch:"MATH"}).limit(5);
    const mgtBooks = await Book.find({branch:"MGT"}).limit(5)
    const lawBooks = await Book.find({branch:"LAW"}).limit(5);
    const phyBooks = await Book.find({branch:"PHY"}).limit(5);
    const cheBooks = await Book.find({branch:"CHE"}).limit(5);
    
    res.status(200).json({data:{"cse":cseBooks,"ece":eceBooks,"math":mathBooks,"mgt":mgtBooks,"law":lawBooks,"phy":phyBooks,"che":cheBooks}});
})

module.exports = router;