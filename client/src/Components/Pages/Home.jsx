import React from 'react'
import { Contacts } from '../Contacts/Contacts'
import { ContactForm } from '../Contacts/ContactForm'
import { ContactFiltered } from '../Contacts/ContactFiltered'
export const Home = () => {

    return (
        <div className="grid-2">
            <div>
                <ContactForm />
            </div>
            <div>
                <ContactFiltered />
                <Contacts />

            </div>
        </div>
    )
}
