const express = require('express');
const router = express.Router();


require('../db/conn');
const Msg = require("../model/msgSchema");

router.get('/msgs',async(req,res)=>{
    const data=await Msg.find({}).populate('student','name regno')
    return res.status(200).json({data: data})
})

router.post('/msgs',async(req,res)=>{
    const {student,msg}=req.body;
    if (!student || !msg){
        return res.status(401).json({msg:'please provide details'})
    }
    try {
       const newmsg=new Msg({student,msg})
       await newmsg.save()
       return res.status(200).json({msg:'message sent successfully'})
    }
    catch (err) {
        console.log (err)
    }
})


module.exports=router;