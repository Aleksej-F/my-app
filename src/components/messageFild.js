import React, { useEffect, useCallback } from "react";
import {useParams} from "react-router-dom";
import { useSelector, useDispatch,  } from "react-redux";
import firebase from "firebase";
import { addMessageWithFirebase,initMessageTracking,getMessageListId} from "../store/messages";
import { getChatList} from "../store/chats";

export default function Message() {
    const chatId = useSelector(getMessageListId); 
  
    const messageList = useSelector((state) => state.messages.messages);

    const messages = messageList[chatId] || [];
    
    const dispatch = useDispatch();
      
    useEffect(() => {
      dispatch(initMessageTracking());
    }, []);
  
    
    const mess = messages.map((message) => {
        
        return (
          <div 
            className = {`message ${message.author === 'Bot' ? 'message_bot' : ''}`}
            key = {message.id}
          >
            <div className = {`message_text ${message.author === 'Bot' ? 'message_text_bot' : ''}`}>
              {message.author} : {message.message}
            </div>
          </div>
        )}) 
      
     return ( mess )
  }
  