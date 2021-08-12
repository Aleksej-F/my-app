import React, { useEffect, useCallback } from "react";
import {useParams} from "react-router-dom";
import { useSelector, useDispatch,  } from "react-redux";
import firebase from "firebase";
import { addMessageWithFirebase,initMessageTracking} from "../store/messages";
import { getChatList} from "../store/chats";

export default function Message() {
    const { chatId } = useParams();
  
    const chats = useSelector(getChatList);
    const messageList = useSelector((state) => 
    {console.log(state)
    
    return state.messages.messages});
    const messages = messageList[chatId];
    const dispatch = useDispatch();
  
    
    useEffect(() => {
      dispatch(initMessageTracking());
    }, []);
  
    console.log(messageList)
    if (messageList) {
        console.log("messageList- вышли")
        return ''}
    
    const mess = messageList.map((message) => {
        return (
          <div 
            className = {`message ${message.author === 'Bot' ? 'message_bot' : ''}`}
            key = {message.id}
          >
            <div className = {`message_text ${message.author === 'Bot' ? 'message_text_bot' : ''}`}>
              {message.author} : {message.text}
            </div>
          </div>
        )}) 
      
     return ( mess )
  }
  