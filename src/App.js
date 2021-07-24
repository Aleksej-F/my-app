import './App.css';

import React, { useState, useEffect } from "react";
import Input  from './components/input';
import MessageList  from './components/messageList';
import faker from "faker"
import { List, Grid, Paper, ListItem, ListItemAvatar, ListItemText, Avatar} from '@material-ui/core';

const chatlist = Array.from( {length:10}).map(() => ({
  id: faker.datatype.uuid(),
  avatar: faker.image.avatar(),
  name: faker.name.findName()
}))


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
    
  },[messageslist]);


   return (
    <div className="App">
     <Grid container spacing={3}>
     <Grid item xs={3}>
        <Paper>
          <List>
            {
              chatlist.map((item) => (<ListItem key={item.id}>
                <ListItemAvatar >
                  <Avatar alt={item.name} src={item.avatar}/>
                </ListItemAvatar>
                <ListItemText primary={item.name}/>
              </ListItem>))
            }

          </List>
        </Paper>
     </Grid>
        
        

       
      <Grid item xs={9}>
        <MessageList messageslist={messageslist}/>   
        <Input send={send}/>
      </Grid>  
      </Grid>
    </div>
  );
}


 