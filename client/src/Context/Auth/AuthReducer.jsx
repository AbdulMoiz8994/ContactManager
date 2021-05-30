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


 export const AuthReducer=(state,action) =>{
     switch(action.type){
         case REGISTER_SUCCESS:
                 localStorage.setItem('token',action.payload.token)
                 return{
                    ...state,
                    isAuthenticated: true,
                    ...action.payload,
                    loading: false
             }
             case REGISTER_FAIL:
                 localStorage.setItem('token')
                 return{
                     ...state,
                     isAuthenticated: null,
                     loading: false,
                     user: null,
                    err: action.payload
                 }
     }
 }   