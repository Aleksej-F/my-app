import {SAVE_PROFILE_CHECKEND_ACTION} from "./actions";
import {SAVE_PROFILE_ACTION} from "./actions";


export const profileInitialState = {
    checked: false,
    name:'',
    surname:'',
    nick:''
}


export const profileReducer = (state = profileInitialState, action) => {
    
    switch (action.type) {
        case SAVE_PROFILE_CHECKEND_ACTION: {
            return {
                ...state,
                checked: !state.checked
            }
        }
        case SAVE_PROFILE_ACTION: {
            console.log(action.payload)
            return {
                ...state,
                name:action.payload.name,
                surname:action.payload.surname,
                nick:action.payload.nick
            }
        }
       
        default:{
            return state;
        }
    }
}