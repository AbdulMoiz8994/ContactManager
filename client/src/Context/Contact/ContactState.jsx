import React, { useReducer } from 'react'
import {CreateContext} from './CreateContact'
import {ContactReducer} from './ContactReducer'
// Random data generate kar sakthee ha temp for now
import {uuid}from 'uuid'

import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CONTACT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_FILTER,
    SET_ALERT,
    REMOVE_ALERT} 
    from '../Types'


export const ContactState=(props) =>{
// initial data for temp now
 const initialData={
    //  har contact ka ak alag sa object create hoga 
     contacts:[
           {
               id: 1,
               name: "Abdul Moiz",
               email: "moiza8@gmail.com",
               phone: '111-111-111',
               type: "personal"
           },
           {
            id: 2,
            name: "Sir Zia",
            email: "ziakhan@gmail.com",
            phone: '222-222-222',
            type: "personal"
        },
        {
            id: 3,
            name: "Adil Altaf",
            email: "adila8@gmail.com",
            phone: '333-333-333',
            type: "professional"
        }
     ]

 }
 // create Reducer

 const [state,dispatch]=useReducer(ContactReducer,initialData)

// Now we wil create actions of all our types, because we define types for actions

// add Contact

// delete Contact

// set current

// clear contact

// update contact

// filter contacts

// clear filter  

// set alert 

// remove alert


   return(
       <div>
           <CreateContext.Provider 
           value={{
               contacts: state.contacts
           }}> 
              {props.children}
           </CreateContext.Provider>
       </div>
   )

}

