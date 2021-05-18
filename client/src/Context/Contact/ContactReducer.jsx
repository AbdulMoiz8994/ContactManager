import {ADD_CONTACT,DELETE_CONTACT,SET_CURRENT,CLEAR_CONTACT} from '../Types'


export const ContactReducer=(state,action) =>{
    console.log(state);
    switch(action.type){
        case ADD_CONTACT:
            return{
                // in this spread state we have firt first state.contacts in array of obejcts
                ...state,
                  contacts: [action.payload, ...state.contacts],
                 

            };
          case  DELETE_CONTACT:
          return{
             ...state,
             contacts: state.contacts.filter((contact)=> contact.id !== action.payload )
          };
         case SET_CURRENT:
         return{
             ...state,
             current: action.payload
         };
         case CLEAR_CONTACT:
         return{
             ...state,
             current: null
         }
            // by defualt jo vlaues ha wo a jayee gi gar kkuch or type karta ha
            default:
               return state
    }
}