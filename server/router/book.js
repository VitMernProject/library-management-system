const express = require('express');
const router = express.Router();


require('../db/conn');
const Book = require("../model/bookSchema");

router.get("/getBooks",async(req,res) => {
  res.status(200).json({message:"Get Books route run successfully"});
})
router.get('/getAllBooks', async(req,res)=>{
  try{
      const Books = await Book.find({});
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

router.post("/addbook",async(req,res) => {
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
module.exports = router;