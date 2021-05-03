const express = require("express");
const router = express.Router();
const {check,validationResult}=require('express-validator')
const User=require('../Model/User');
const  Contact=require('../Model/Contact')
const auth=require('../middleware/auth')


// @route Get api/contact
//  get all the user's contacts
// access private owner of user can see/acess
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
   const {name,email,phone,type}=req.body
  try{
    const  newContact= new Contact({
      name,
      email,
      phone,
      type,
      user: req.user.id
    })

    const contact= await newContact.save();
    res.json(contact)
  }catch(err){
    console.error(err.message)
    res.status(500).send("server error")
  }
});

// @route PUT  api/contact/:id
// update the conact
// access private
// upto four fileds e can update this name,email,phone,type
router.put("/:id",auth, async (req, res) => {

    const {name,email,phone,type}=req.body

 let contactFields={};
//  Above is obejct and we are giving cond in key =value
 if(name) contactFields.name= name;
 if(email) contactFields.email=email;
 if(phone) contactFields.phone=phone;
 if(type) contactFields.type= type;
 try{
     let contact= await Contact.findById(req.params.id)
    //  check if contact does not exist then run 404 server error and msg
     if(!contact){
       return res.status(404).json({msg: "This Contact does not exist"})
     } 
    //  if the contact exits,then make sure the current signed in user owns the account 
     if(contact.user.toString() !== req.user.id){
       return res.status(401).json({msg: "You do not have correct authorization to update this"})
     }
    //  if above conditions are all true
     contact = await Contact.findByIdAndUpdate(req.params.id,
      { $set: contactFields},
      // if contact does not exist then create one 
        {new: true}
      )
      console.log(contact);

      res.json(contact)

 }catch(err){
     console.error(err.message);
     return res.status(500).send("Server Error")
 }     
});

// same as above things are required we req id of main contatc's user
// @route delete api/contact/:id
router.delete("/:id", auth ,async(req, res) => {
  try{
    let contact= await Contact.findById(req.params.id)
   //  check if contact does not exist then run 404 server error and msg
    if(!contact){
      return res.status(404).json({msg: "This Contact does not exist"})
    } 
   //  if the contact exits,then make sure the current signed in user owns the account 
    if(contact.user.toString() !== req.user.id){
      return res.status(401).json({msg: "You do not have correct authorization to update this"})
    }
   //  if above conditions are all true
      await Contact.findByIdAndRemove(req.params.id)

      // we are sending the message that user's contact has been deleted
      res.json({msg: "The contact has been deleted"})
     

}catch(err){
    console.error(err.message);
    return res.status(500).send("Server Error")
}
});

//we are exporting it as we do in react but syntax diff;
module.exports = router;
