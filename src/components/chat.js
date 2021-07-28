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
    const {chatlist, send} =props;
    const par = parseInt(chatId)>=chatlist.length ? 1 : parseInt(chatId)  
    
    const [messageslist, setMessageslist] = useState(
        (!chatId || !chatlist[chatId])?[]:(chatlist[par].messageslist)
        );
    
    console.log ('chatId - ' + chatId + '     '+  par)
    
    console.log ('messageslist - ' )

    console.log (messageslist)
    
    //console.log("chatlist[par].messageslist   " + chatlist[par].messageslist)

    
    const setMessag = function (key) {
        setMessageslist(chatlist[key].messageslist) 
        console.log ('messageslistсдшс - ' + messageslist)
    }
    
/*
    const send = function ({value, name}) {
    
        let message = { author: name, text: value, id: faker.datatype.uuid(),}
        setMessageslist(messageslist.concat(message))
    
    }; 
  */
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

   
    return (

    <Grid container spacing={3}>
        <Grid item xs={3}>
            <Paper>
                <ChatList chatlist={chatlist} setMessag={setMessag}/>
            </Paper>
        </Grid>
        <Grid item xs={9}>
            <MessageList messageslist={messageslist}/>   
            {(!chatId || !chatlist[chatId])?'':<Input send={
                ({name, value})=> {
                send({name:name, value:value, key:par})
                }}/>}
        </Grid>  
    </Grid>
    );
};

export default Chat