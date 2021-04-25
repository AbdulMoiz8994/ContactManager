const express = require("express");
const router = express.Router();
const {check, validationResult} =require('express-validator');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const dotenv=require('dotenv')
dotenv.config({path: '../config.env'})


const User=require('../Model/User')
const auth=require('../middleware/auth')

//import user modle

// @route get api/auth 
// access private 
// This  route works like when users loggedIn then get/show their information not others  
// we will sen dthe token and on header
router.get("/", auth , async(req, res) => {
  try{
     const user=await User.findById(req.user.id).select('-password');
     res.json(user)
  }catch(err){
     console.error(err);
     res.status(500).send("server error")
  }

});

// @route Post api/auth
// Autherize user and get the token

router.post("/",[
  check("email","please enter valid email").isEmail(),
  check("password","please enetr the password").exists()

], async (req, res) => {
 const errors= validationResult(req)
 if(!errors.isEmpty()){
   return res.status(400).json({errors: errors.array() })
 } 
 const {email,password}=req.body;
 try{
   
  let user= await User.findOne({email: email})

  if(!user){
    return res.status(400).json({msg: "This user's email doest not exist"})
  }
 const  isMatchPass= await bcrypt.compare(password,user.password)
if(!isMatchPass){
  return res.status(400).json({msg: "This passowrd doest not match"})
}
// create payload where we save our user's id
const payload={
  user:{
    id: user.id
  }
}

jwt.sign(payload,process.env.jwtSecret,{
  expiresIn: 3600000
},(err,token) =>{
     if (err) throw err;
     res.json({token})
})
 }catch(err){
    console.error(err.message)
    res.status(500).send("Server error")
 }
 
});

//we are exporting it as we do in react but syntax diff;
module.exports = router;
