import React from "react";
import Message from './message'

const MessageList = (props) => {
    const { messageslist } = props;
   
    return (
      <div className="messages">
         <Message messageslist={messageslist}/>
      </div>
    );
  };


export default MessageList ;