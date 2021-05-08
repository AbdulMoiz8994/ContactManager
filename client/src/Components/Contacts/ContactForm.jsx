import React, { useContext, useState } from 'react'
import {CreateContext} from  '../../Context/Contact/CreateContact'
export const ContactForm = () => {
    
    const CreateContexts=useContext(CreateContext)
    const [contact, setContact]=useState({
        name: '',
        email: '',
        phone: '',
        type: 'personal',
    })

    const {name,email,phone,type}=contact

const onChange=(event) =>{
    event.preventDefault()
    // we are getting  name and value dynamically
    setContact({...contact,[event.target.name]: event.target.value})   
    console.log({...contact});
}
const onSubmit=(event) =>{
   event.preventDefault();
   CreateContexts.addContact(contact);
//    when we will submit the form the useState hook's function call setContact will come again on initial form 
   setContact({
       name: '',
       email: '',
       phone: '',
       type: 'personal'
   })
}

    return (
        <>
          <form onSubmit={onSubmit}>
         <h2 className="text-primary">Add Contact</h2>      
         <input type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={onChange}
         />
          <input type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={onChange}
         />
          <input type="text"
          placeholder="Phone"
          name="phone"
          value={phone}
          onChange={onChange}
         />
         <h5>Contact Type</h5>
         <input type='radio' name='type' value='personal' checked={type === 'personal'} onChange={onChange}/> Personal
         {/* we give the space like this sometimes */}
          { ' '}    
         <input type='radio' name='type' value='professional' checked={type === 'professional'} onChange={onChange}/> Professional
         <input type="submit" value="Add Contact" className="btn btn-primary btn-block" />
        </form>  
        </>
    )
}
