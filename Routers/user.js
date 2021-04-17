const express = require("express");
const router = express.Router();
//we are importing check validation/autentication which express provide us
const {check,validationResult} =require('express-validator')

const User=require('../Model/User')


router.post("/",[
    check('name',"please enter the name").not().notEmpty(),
    check('email','Please enter the valid email').isEmail(),
    check('password','Please enter password at least 6 character').isLength({min: 6})

], (req, res) => {
  const errors=validationResult(req)
  if(!errors.isEmpty()){
    return res.status(400).json({errors: errors.array()})
  }
    res.send("passed successfully")
});

//we are exporting it as we do in react but syntax diff;
module.exports = router;
