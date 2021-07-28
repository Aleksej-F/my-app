import Input  from './input';
import MessageList  from './messageList';
import ChatList  from './chatList';
import { Grid, Paper,} from '@material-ui/core';
import React, { useState, useEffect } from "react";

import {
   
    useParams
  } from "react-router-dom";





const  Chat  =  (props) => {
    const  {chatId}  = useParams();
    const {chatlist} =props;
    const par = parseInt(chatId)>=chatlist.length ? 1 : parseInt(chatId)  
    const [messageslist, setMessageslist] = useState(
        (!chatId || !chatlist[chatId])?[]:(chatlist[par].messageslist)
        );
    
    console.log ('chatId - ' + chatId + '     '+  par)
    
    console.log ('messageslist - ' + messageslist)
    
    const setMessagesList = function (key) {
        setMessageslist(chatlist[key].messageslist) 
    }
    

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

    /*
    if (parseInt(chatId) >= chatlist.length) {
        return null
    } */

    return (

    <Grid container spacing={3}>
        <Grid item xs={3}>
            <Paper>
                <ChatList chatlist={chatlist} setMessagesList = {setMessagesList }/>
            </Paper>
        </Grid>
        <Grid item xs={9}>
            <MessageList messageslist={messageslist}/>   
            {(!chatId || !chatlist[chatId])?'':<Input send={send}/>}
        </Grid>  
    </Grid>
    );
};

export default Chat