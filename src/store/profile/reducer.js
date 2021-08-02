import {SAVE_PROFILE_ACTION} from "./actions";



export const profileInitialState = {
    checked: false,
}


export const profileReducer = (state = profileInitialState, action) => {
    
    switch (action.type) {
        case SAVE_PROFILE_ACTION: {
            return {
                ...state,
                checked: !state.checked
            }
        }
       
        default:{
            return state;
        }
    }
}