const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

require('../db/conn');
const User = require("../model/userSchema")

router.get('/', (req, res) => {
    res.send(`Hello world from server router js`);
});


//using promises
// router.post('/register', async (req, res) =>{
//     const {name, email, phone, regno, password, cpassword } = req.body;

//     if(!name|| !email|| !phone|| !regno|| !password|| !cpassword ){
//         return res.status(422).json({error: "Please fill all fields"});
//     }

//     User.findOne({email: email})
//     .then((userExistAlready) => {
//         if(userExistAlready){
//             return res.status(422).json({error: "Email Already exists"})
//         }

//             const user = new User({name, email, phone, regno, password, cpassword});

//             user.save().then(() =>{
//                 res.status(201).json({msg: "Registered Successfuly! "});
//             }).catch((err) => res.status(500).json({error:"Failed to register"}));
//     }).catch(err =>{console.log(err); });

// });

//async-await

router.post('/register', async (req, res) =>{
    const {name, email, regno, phoneno, password, cpassword } = req.body;
    
    if(!name|| !email|| !regno|| !phoneno || !password|| !cpassword ){
        return res.status(422).json({error: "Please fill all fields"});
    }

    try{
        const userExistAlready = await User.findOne({email: email});

        if(userExistAlready){
            return res.status(422).json({error: "Email Already exists"})
        }else if(password != cpassword ){
            return res.status(422).json({error: "Password and Confirm Password does not match!"})
        }else{
            const user = new User({name, email, regno, phoneno ,password, cpassword, role:'student'});
            const userRegister= await user.save();
            if(userRegister){
                res.status(201).json({msg: "Registered Successfuly! "});
            }else{
                res.status(500).json({error:"Failed to register"});
            }
        }

        
        
    }catch(err){
        console.log(err);
    }
});

// login route
router.post('/signin', async (req, res) =>{
    try{
        let token;
        const{ email, password } = req.body;
        if(!email || !password){
            return res.status(400).json({error: "Please fill all fields"});
        }
        // else{
        //     res.status(201).json({msg: "Login Successful! "});
        // }
        const userLogin = await User.findOne({ email:email });

        if(userLogin){
            const isMatch = await bcrypt.compare(password, userLogin.password);

            token = await userLogin.generateAuthToken();
            // console.log(token);

            res.cookie("jwtoken", token, {
                expires:new Date(Date.now() + 25892000000),
                httpOnly : true
            });

            if (!isMatch){
                return res.status(400).json({ error: 'Invalid Credentials (password)' });
            }else{
                res.json({msg:"Login Successful! ",uid:userLogin._id, role:userLogin.role});
            }
        }else{
            return res.status(400).json({ error: 'Invalid Credentials' });
        }

        
        

    }catch(err){
        console.log(err);
    }
});



module.exports = router;