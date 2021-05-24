import React, { useReducer } from 'react'
import {SET_ALERT,REMOVE_ALERT} from '../Types'
import {AlertContext} from './AlertContext'
import {AlertReducer} from './AlertReducer'
import {v4 as uuid} from 'uuid'


export const AlertState = (props) => {
    // initial state is an array then if we want to make an alert then we will make an object 
   const initialState=[]

   const [state,dispatch]=useReducer(AlertReducer,initialState)

// setAlert
// we get two value in the paremeter first is alert msg and second is style type
const setAlert=(msg,type) =>{
    const id= uuid()
     dispatch({type: SET_ALERT, payload:{ msg,type,id}})

// Removealert
     setTimeout(() => dispatch({
         type: REMOVE_ALERT,
         payload: id
     }),5000)
}


    return (
        <div>
            <AlertContext.Provider value={{
                alert: state,
                setAlert,
            }}>
                {props.children}
            </AlertContext.Provider>
            
        </div>
    )
}
