import React, { useContext } from 'react'
import {CreateContext} from '../../Context/Contact/CreateContact'
import {ContactItem} from './ContactItem'


export const Contacts = () => {
    const CreateContexts=useContext(CreateContext)    
    const {contacts}=CreateContexts;
    console.log(contacts);

    return (
        <React.Fragment>
            {contacts.map((contacts) =>(
                // <>
                <ContactItem key={contacts.id} contacts={contacts} />
                // </>
            ))}
        </React.Fragment>
    )
}
