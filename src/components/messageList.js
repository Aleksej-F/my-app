import React from "react";
import Message from './message'
import Input  from './input';
import {useParams} from "react-router-dom";

const MessageList = () => {
  let {chatId}  = useParams();
  chatId = ''
  console.log ('chatId - ' + chatId)
    return (
      <div>
        <div className="messages">
         <Message/>
        </div> 
        <Input/>
      </div> 
      
    );
  };


export default MessageList