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
                    ...action.payload,
                    isAuthenticated: true,
                    loading: false
             }
             case REGISTER_FAIL:
                 localStorage.removeItem('token')
                 return{
                     ...state,
                     token: null,
                     isAuthenticated: false,
                     loading: false,
                     user: null,
                    error: action.payload
                 }
                 case CLEAR_ERROR:
                     return{
                         ...state,
                         error: null
                     }
                 default:
                     return state
     }
 }   