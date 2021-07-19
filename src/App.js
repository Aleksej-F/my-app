import './App.css';

import React, { useState, useEffect } from "react";
import Input  from './components/input';
import Message  from './components/message';

export default function App() {
  const [messageslist, setMessageslist] = useState([]);

  const send = function ({value, name}) {
    
    let message = { author: name, text: value}
    setMessageslist(messageslist.concat(message))
    
  }; 
  
  useEffect(() => {
    
    if (messageslist.length > 0) {
      
        if (messageslist[messageslist.length-1].author !== 'Bot'){
            let mes = {name: 'Bot',value: 'привет'};
            setTimeout(() => {
              send (mes)
            }, 2000);
            
        }
    }
    
    
  }, [messageslist]);


   return (
    <div className="App">
      <header className="App-header">
             
        <Input send={send}/>
        <Message messageslist={messageslist}/>
         
      </header>
    </div>
  );
}


 