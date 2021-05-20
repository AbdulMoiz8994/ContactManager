import React, { useContext } from 'react'
import {CreateContext} from '../../Context/Contact/CreateContact'
import {ContactItem} from './ContactItem'


export const Contacts = () => {
    const CreateContexts=useContext(CreateContext)    
    const {contacts,filtered}=CreateContexts;
    console.log(contacts);
if(contacts.length === 0){
    return <h3>Please use the from to add a contact</h3>
}

    return (
        <React.Fragment>
            {filtered !== null ? filtered.map((contacts) =>(
                <ContactItem key={contacts.id} contacts={contacts} />                  
            )):
             contacts.map((contacts) =>(
                // <>
                <ContactItem key={contacts.id} contacts={contacts} />
                // </>
            )) }
            
        </React.Fragment>
    )
}
