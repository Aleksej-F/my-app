import React from "react";


const Message = (props) => {
    const { messageslist } = props;
  
    const mess = messageslist.map((message, index ) => {
   
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