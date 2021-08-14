import { ID_CHAT_MESSAGE, CHANGE_MESSAGES } from "./actions";

const messagesInitialState = {
    messages: {},
    id:""
  };
  
export const messagesReducer = (state = messagesInitialState, action) => {
    
    switch (action.type) {
        case ID_CHAT_MESSAGE: {
            return {
                    ...state,
                    id: action.payload
                }
            }
      
        case CHANGE_MESSAGES: {
            return {
                ...state,
                messages: {
                    ...state.messages,
                    [action.payload.chatId]: action.payload.messages,
                  },
                };
              }
          
        default:{
            return state;
        }
    }
}