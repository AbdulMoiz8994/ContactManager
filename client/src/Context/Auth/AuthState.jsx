import React,{useReducer} from 'react'
import {AuthContact} from './AuthContact'
import {AuthReducer}from './AuthReducer'
import {
      REGISTER_SUCCESS,
      REGISTER_FAIL,
      LOGIN_SUCCESS,
      LOGIN_FAIL,
      USER_LOADED,
      AUTH_ERROR,
     CLEAR_ERROR,
     LOGOUT
} 
from '../Types'


export const AuthState = (props) => {

    // This will be an object
const initialState={
    // get token from local storage
   token: localStorage.getItem("token"),
//    we do authenticate to use when they will fill thr form
   isAuthenticated: null,
//    by default true then false
   loading: true,
//    we are doing authentixation on user ,jab tak details add nahi hoti wo null hoga
   user: null,
//    initail it will null becuase ony page will reload
   error: null
}

const [state,dispatch]=useReducer(AuthReducer,initialState)


    return (
        <div>
            <AuthContact.Provider value={{
                token: state.token,
                isAuthenticated: state.isAuthenticated,
                loading: state.loading,
                user: state.user,
                error: state.user, 
            }}>
            {props.children}
            </AuthContact.Provider>

            
        </div>
    )
}
