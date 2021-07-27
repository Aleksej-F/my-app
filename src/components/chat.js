import Input  from './input';
import MessageList  from './messageList';
import ChatList  from './chatList';
import { Grid, Paper,} from '@material-ui/core';
import React, { useState, useEffect } from "react";
import faker from "faker"
import {
   
    useParams
  } from "react-router-dom";
const chatlist = Array.from( {length:10}).map(() => ({
    id: faker.datatype.uuid(),
    avatar: faker.image.avatar(),
    name: faker.name.findName(),
    messageslist: Array.from( {length:5}).map(() => ({
        author: faker.name.findName(), 
        text: faker.lorem.text()
    }))
}))



const  Chat  =  (props) => {
    const  {chatId}  = useParams();

    console.log (parseInt(chatId))
    
    const par = parseInt(chatId)>=chatlist.length ? 1 : parseInt(chatId)
    
    const [messageslist, setMessageslist] = useState(chatlist[par].messageslist);
    
    console.log (messageslist)

    const send = function ({value, name}) {
    
        let message = { author: name, text: value}
        setMessageslist(messageslist.concat(message))
    
    }; 
  
    useEffect(() => {
    
        if (messageslist.length > 5) {
      
            if (messageslist[messageslist.length-1].author !== 'Bot'){
                let mes = {name: 'Bot',value: 'привет'};
                setTimeout(() => {
                send (mes)
                }, 2000);
                
            }
        }
    
    },[messageslist]);

    
    if (parseInt(chatId) >= chatlist.length) {
        return null
    } 

    return (

    <Grid container spacing={3}>
        <Grid item xs={3}>
            <Paper>
                <ChatList chatlist={chatlist}/>
            </Paper>
        </Grid>
        <Grid item xs={9}>
            <MessageList messageslist={messageslist}/>   
            <Input send={send}/>
        </Grid>  
    </Grid>
    );
};

export default Chat