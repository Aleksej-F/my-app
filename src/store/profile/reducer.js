import {SAVE_PROFILE_ACTION} from "./actions";



export const profileInitialState = {
    checked: false,
}


export const profileReducer = (state = profileInitialState, action) => {

    switch (action.type) {
        case SAVE_PROFILE_ACTION: {
            console.log(state)
            console.log(action.payload)
            state.checked = action.payload
            console.log(state)
            return {
                state 
                
            }
        }
       
        default:{
            return state;
        }
    }
}