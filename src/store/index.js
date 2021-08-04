import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import {profileReducer} from "./profile";
import {chatsReducer} from "./chats";
import {messagesReducer} from "./messages";
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // localStorage

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
    key: 'root',
    storage,
  }
  

const rootReducer = combineReducers({
    profile:profileReducer,
    chats:chatsReducer,
    messageList:messagesReducer,
})
const persistedReducer = persistReducer(persistConfig, rootReducer);

const loggerMiddeleware = (store) => (dispatch) => (action) =>{
    console.log('loger  ', store, dispatch, action )
    return dispatch(action)
}
/*
const middleware = store => next => (action) => {
    if (action.type === ADD_MESSAGE && action.list.author !== AUTHORS.BOT)
    {
      const botMessage = {' ... ''};
      setTimeout(() => store.dispatch(addMessage(botMessage)), 2000);
    }
    
    return next(action)
}
*/
/*
const addMessageWithThunk = (chatId, message) => (dispatch, getState) => {
    dispatch(addMessage(chatId, message));
    if (message.author !== AUTHORS.BOT) {
       const botMessage = {' ... '};
       setTimeout(() => dispatch(addMessage(chatId, botMessage)), 2000);
    }
  }
*/



export const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(thunk)),
   
);

export const persistor = persistStore(store); 