import React, { useReducer } from 'react'
import { AuthContact } from './AuthContact'
import { AuthReducer } from './AuthReducer'
import axios from 'axios';
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
    const initialState = {
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

    const [state, dispatch] = useReducer(AuthReducer, initialState)


    //load user

    //Register user
    async function register(formData) {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try {
            const res = await axios.post('/api/user', formData, config)
            dispatch({
                type: REGISTER_SUCCESS,
                paylload: res.data
            })
        } catch (err) {
         dispatch({
             type: REGISTER_FAIL,
             paylaod: err.response.data.msg
         })
        }
    }


    //login user


    //logout user

    return (
        <div>
            <AuthContact.Provider value={{
                token: state.token,
                isAuthenticated: state.isAuthenticated,
                loading: state.loading,
                user: state.user,
                error: state.user,
                register,
            }}>
                {props.children}
            </AuthContact.Provider>


        </div>
    )
}
