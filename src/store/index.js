import {createStore, combineReducers} from 'redux';
import {profileReducer} from "./profile";
import {chatsReducer} from "./chats";
import {messagesReducer} from "./messages";


const rootReducer = combineReducers({
    profile:profileReducer,
    chats:chatsReducer,
    messageList:messagesReducer,
})


export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
