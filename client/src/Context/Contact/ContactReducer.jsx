import {ADD_CONTACT} from '../Types'


export const ContactReducer=(state,action) =>{
    console.log(state);
    switch(action.type){
        case ADD_CONTACT:
            return{
                // in this spread state we have firt first state.contacts in array of obejcts
                ...state,
                  contacts: [action.payload, ...state.contacts],
                 

            }
            // by defualt jo vlaues ha wo a jayee gi gar kkuch or type karta ha
            default:
               return state
    }
}