import {ADD_MESSAGE, ID_CHAT_MESSAGE} from "./actions";
import {chatsInitialState} from "../chats"
import faker from "faker"

console.log(chatsInitialState.list)

const message = function() {
    return {
        id: faker.datatype.uuid(),
        author: faker.name.findName(), 
        text: faker.lorem.text()
    }
  }
  const message1 = function(value) {
    return {
        id: faker.datatype.uuid(),
        author: faker.name.findName(), 
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
console.log(messageList())
export const messagesInitialState = {
    list: messageList(),
    id:''
}


   
export const messagesReducer = (state = messagesInitialState, action) => {
    
    switch (action.type) {
        case ADD_MESSAGE: {
            console.log(state.list[action.payload.id])
            const currentList = state.list[action.payload.id] || [];
            console.log(currentList)
           // state.list[action.payload.id].push(message1(action.payload.value))
            return {
                ...state,
                list: {
                    ...state.list,
                    [action.payload.id]:[
                        ...currentList,
                        message1(action.payload.value)
                    ]
                }
               // list[action.payload.id].concat(message1(action.payload.value))
            }
        }
        
        case ID_CHAT_MESSAGE: {
            return {
                    ...state,
                    id: action.payload
                }
            }
       
        default:{
            return state;
        }
    }
}