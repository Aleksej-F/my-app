import React from "react";
import Message from './message'
import Input  from './input';


const MessageList = (props) => {
    const { messageslist, send } = props;
   console.log (messageslist.length)
    return (
      <div>
        <div className="messages">
         <Message messageslist={messageslist}/>
        </div> 
        <Input send={
            ({name, value})=> {
              send({name:name, value:value})
            }}
        />
      </div> 
      
    );
  };


export default MessageList