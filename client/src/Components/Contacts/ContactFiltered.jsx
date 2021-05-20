import React, { useRef, useContext,useEffect } from 'react'
import {CreateContext} from '../../Context/Contact/CreateContact'


export const ContactFiltered = () => {

const createContact=useContext(CreateContext)
console.log(createContact);

const {filtered,filterContact,clearFilter}=createContact

const ref=useRef('');
console.log(ref.current.value);

useEffect(() =>{
    if(filtered === null){
        ref.current.value = ''; 
    }
})

const onChangeFunc=(e) =>{
   
   if(ref.current.value !== ''){
    filterContact(e.target.value)   
    console.log(e.target.value);
   }else{
       clearFilter()
   } 
}

    return (
        <form>
            <input type="text" ref={ref} placeholder="Search Contact" onChange={onChangeFunc} />
        </form>
    )
}
