import React from "react";
import { useSelector } from "react-redux";
import { getMessageListId} from "../store/messages";

const Message = (props) => {
    const id = useSelector(getMessageListId);
    
    const messageslist = useSelector((state) => id === '' ? [] : 
            state.messageList.list[id] ? state.messageList.list[id]:[]);
    
     
    const mess = messageslist.map((message) => {
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

};


export default Message ;