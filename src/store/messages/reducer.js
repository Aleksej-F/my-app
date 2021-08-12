import {ADD_MESSAGE, ID_CHAT_MESSAGE, CHANGE_MESSAGES } from "./actions";
import {chatsInitialState} from "../chats"
import faker from "faker"


/* 
//для localstorage
const message = function() {
    return {
        id: faker.datatype.uuid(),
        author: faker.name.findName(), 
        text: faker.lorem.text()
    }
}

const message1 = function(value, author) {
    return {
        id: faker.datatype.uuid(),
        author: author, 
        text: value
    }
}

const messageList = function() {
    const mess = {}
    for (let i = 0; i < (chatsInitialState.list.length); i++) {
        mess[chatsInitialState.list[i].id] = Array.from({length:5}).map(()=>message())
    }
    return mess
}

export const messagesInitialState = {
    list: messageList(),
    id:'',
   
}
*/
const messagesInitialState = {
    messages: {},
    id:""
  };
  
export const messagesReducer = (state = messagesInitialState, action) => {
    
    switch (action.type) {
        /*
        case ADD_MESSAGE: {
            const currentList = state.list[action.payload.id] || [];
            return {
                ...state,
                list: {
                    ...state.list,
                    [action.payload.id]:[
                        ...currentList,
                        message1(action.payload.message.value, action.payload.message.author)
                    ]
                }
            }
        }
         */
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