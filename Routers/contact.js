const express = require("express");
const router = express.Router();
const {check,validationResult}=require('express-validator')
const User=require('../Model/User');
const  Contact=require('../Model/Contact')
const auth=require('../middleware/auth')


// @route Get api/contact
//  get all the user's contacts
// access private owner f user can see/acess
router.get("/",auth, async(req, res) => {
  try{
        const contact=await Contact.find({user: req.user.id}).sort({
          date: -1
        })
        res.json(contact)
  }catch(err){
    console.error(err)
    res.status(500).send("Server error")
  }
});

// @route Get api/contact
// update a contact/add the contact
// private

// we have two middleware after path
router.post("/",[auth,[
  check('name',"name is required").not().notEmpty()
]],async (req, res) => {
   const errors=validationResult(req)
   if(!errors.isEmpty()){
     return res.status(400).json({errors: errors.array()})
   }
   const {name,email,phone,relationship}=req.body
  try{
    const  newContact= new Contact({
      name,
      email,
      phone,
      relationship,
      user: req.user.id

    })

    const contact= await newContact.save();
    res.json(contact)
  }catch(err){
    console.error(err.message)
    res.status(500).send("server error")
  }
});

// @route PUT  api/contact/0

router.put("/:id", (req, res) => {
  res.status(500).send(req.body);
});
router.delete("/:id", (req, res) => {
  res.send("Delete The contact");
});

//we are exporting it as we do in react but syntax diff;
module.exports = router;
