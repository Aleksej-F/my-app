import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import {profileReducer} from "./profile";
import {chatsReducer} from "./chats";
import {messagesReducer} from "./messages";
import {gistsReducer} from "./gists";
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // localStorage

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    profile:profileReducer,
    chats:chatsReducer,
    messageList:messagesReducer,
    gists:gistsReducer,
})

const persistConfig = {
  key: 'root',
  storage,
}
const persistedReducer = persistReducer(persistConfig, rootReducer);

const loggerMiddeleware = (store) => (dispatch) => (action) =>{
    //console.log('loger  ', store, dispatch, action )
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




export const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(loggerMiddeleware,thunk)),
   
);

export const persistor = persistStore(store); 