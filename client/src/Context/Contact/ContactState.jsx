import React, { useReducer } from 'react'
import { CreateContext } from './CreateContact'
import { ContactReducer } from './ContactReducer'
// Random data generate kar sakthee ha temp for now
import { v4 as uuid } from 'uuid';

import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CONTACT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_FILTER,
    SET_ALERT,
    REMOVE_ALERT
}
    from '../Types'


export const ContactState = (props) => {
    // initial data for temp now
    const initialData = {
        //  har contact ka ak alag sa object create hoga 
        contacts: [
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
        ],
        current: null,
        filtered: null,
    }
    // create Reducer

    const [state, dispatch] = useReducer(ContactReducer, initialData)

    // Now we wil create actions of all our types, because we define types for actions

    // add Contact
    const addContact = (contact) => {
        contact.id = uuid()
        dispatch({
            type: ADD_CONTACT,
            payload: contact
        })
    }

    // delete Contact
    const deleteContact = (id) => {
        dispatch({
            type: DELETE_CONTACT,
            payload: id
        })
    }


    // set current
    const SetCurrent = (contact) => {
        console.log(contact);
        dispatch({
            type: SET_CURRENT,
            payload: contact
        })
    }


    // clear contact
    const clearContact = () => {
        dispatch({
            type: CLEAR_CONTACT,
        })
    }


    // update contact
    const updateContact = (contact) => {
        dispatch({
            type: UPDATE_CONTACT,
            payload: contact
        })
    }


    // filter contacts
    const filterContact = (text) => {
        dispatch({
            type: FILTER_CONTACTS,
            payload: text
        })
    }

    // clear filter  
    const clearFilter = () => {
        dispatch({
            type: CLEAR_FILTER
        })
    }


    // set alert 

    // remove alert


    return (
        <div>
            <CreateContext.Provider
                value={{
                    contacts: state.contacts,
                    current: state.current,
                    filtered: state.filtered,
                    addContact,
                    deleteContact,
                    SetCurrent,
                    clearContact,
                    updateContact,
                    filterContact,
                    clearFilter
                }}>
                {props.children}
            </CreateContext.Provider>
        </div>
    )

}

