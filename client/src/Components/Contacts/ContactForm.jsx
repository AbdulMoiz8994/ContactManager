import React, { createContext, useContext, useEffect, useState } from 'react'
import {CreateContext} from  '../../Context/Contact/CreateContact'
export const ContactForm = () => {
    
    const CreateContexts=useContext(CreateContext)
    // destrcuture from global state
    const {addContact,current,clearContact,updateContact}=CreateContexts

    console.log(current);
    useEffect(() =>{
        if(current !== null){
            setContact(current)
        }else{
            setContact({
                name: '',
                email: '',
                phone: '',
                type: 'personal',         
            })
        }
    },[current,CreateContexts])


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

   if(current === null){
    addContact(contact);
   }else{
    updateContact(contact)
   }
   
//    when we will submit the form the useState hook's function call setContact will come again on initial form 
   setContact({
       name: '',
       email: '',
       phone: '',
       type: 'personal'
   })
//    we can also call function clearAll() which will do same thing same as above
}

// clear all input's if we want do not want to edit something
const clearAll=() =>{
    clearContact();
}

    return (
        <>
          <form onSubmit={onSubmit}>
        {/* if current exist then edit Contact otherwise add Contact */}
         <h2 className="text-primary">{current ? "Edit Contact" : "Add Contact"}</h2>      
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
         {/* if current exist then edit otherwise add contact */}
         <input type="submit" value={current ? "Update Contact" : "Add Contact"} className="btn btn-primary btn-block"  />

         {current && (
             <div>
                 <button className="btn btn-light btn-block" onClick={clearAll}>Clear</button>
             </div>
         )}
        </form>  
        </>
    )
}
