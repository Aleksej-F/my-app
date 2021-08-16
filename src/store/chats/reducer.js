import {ADD_CHAT, REMOVE_CHAT, ACTIVE_CHAT} from "./actions";

export const chatsInitialState = {
    list: {}
}
   
export const chatsReducer = (state = chatsInitialState, action) => {
    
    switch (action.type) {
        case ADD_CHAT: {
            return {
                ...state,
                list: action.payload.chats
            }   
            
        }
        case REMOVE_CHAT: {
            return {
                ...state,
                list: state.list.filter(word => word.id!==action.payload)
            }
        }
        case ACTIVE_CHAT: {
            return {
                ...state,
            }
        }
        default:{
            return state;
        }
    }
}