import React from "react";


const Message = (props) => {
    const { messageslist } = props;
  
    const mess = messageslist.map((message, index ) => {
          
          if (message.author === 'Bot') {
            return (
              <div 
                className="message  message_bot"
                key={index}
              >
                <div className="message_text">
                  {message.author} : {message.text}
                </div>
              </div>
            )
            
          } else {
            return (
              <div className="message "
                key={index}
              >
                <div className="message_text"> 
                  {message.author} : {message.text}
                </div>
              </div>
            )
          }
            
        
        
        
        })



    return (
      <div className="messages">
         { mess} 
      </div>
    );
  };


export default Message ;