import {ADD_CHAT, REMOVE_CHAT, ACTIVE_CHAT} from "./actions";
import faker from "faker"

const chat = function() {
    return {
    id: faker.datatype.uuid(),
    avatar: faker.image.avatar(),
    name: faker.name.findName(),
    priz: false,
    }
  }

export const chatsInitialState = {
    list: Array.from({length:10}).map(()=>chat())
}
   
export const chatsReducer = (state = chatsInitialState, action) => {
    
    switch (action.type) {
        case ADD_CHAT: {
            return {
                ...state,
                list: state.list.concat(chat())
            }
        }
        case REMOVE_CHAT: {
            return {
                ...state,
                list: state.list.filter(word => word.id!==action.payload)
            }
        }
        case ACTIVE_CHAT: {
            console.log(action.payload)
            console.log(state.list[action.payload])
            return {
                ...state,
                 
            }
        }
        default:{
            return state;
        }
    }
}