const express = require('express');
const router = express.Router();

const User = require("../model/userSchema");

require('../db/conn');

router.get('/getUserDetails', async(req,res)=>{
    const uid = req.query.uid;
    if(!uid){
        return res.status(422).json({message:'UID Not Found !!!'});
    }
    try{
        const userExist = await User.findById(uid);
        if(userExist){
            return res.status(200).json({data:{
                _id:userExist._id, 
                name:userExist.name,
                email:userExist.email, 
                regno:userExist.regno,
                phoneno:userExist.phoneno,
            }});
        }
        else{
            return res.status(400).json({message:'User Not Found !!!'});
        }
    }
    catch(error){
        console.log(error);
    }
})


module.exports = router;