import React from "react";
import Message from './messageFild'
import Input  from './input';

const MessageList = () => {
 
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