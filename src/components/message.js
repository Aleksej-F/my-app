import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { createAddMessage,getMessageListId} from "../store/messages";

const Message = (props) => {
    const id = useSelector(getMessageListId);
    console.log(id)
    const messageslist = useSelector((state) => id === '' ? [] : 
            state.messageList.list[id] ? state.messageList.list[id]:[]);
    console.log(messageslist)
    const dispatch = useDispatch(); 
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