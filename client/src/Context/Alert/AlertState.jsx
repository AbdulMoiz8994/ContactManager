import React, { useReducer } from 'react'
import {SET_ALERT,REMOVE_ALERT} from '../Types'
import {AlertContext} from './AlertContext'
import {AlertReducer} from './AlertReducer'

export const AlertState = (props) => {
    // initial state is an array then if we want to make an alert then we will make an object 
   const initialState=[]

   const [state,dispatch]=useReducer(AlertReducer,initialState)

// setAlert


// Remove alert

    return (
        <div>
            
        </div>
    )
}
