import React from "react";


const Message = (props) => {
    const { messageslist } = props;
  
    return (
      <div className="messages">
         { messageslist.map((message) => <div className="message">{message.author} : {message.text}</div>) }
      </div>
    );
  };


export default Message ;