import Input  from './input';
import MessageList  from './messageList';
import ChatList  from './chatList';
import { Grid, Paper,} from '@material-ui/core';
import React, { useState, useEffect } from "react";
import faker from "faker"

import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import {
   
    useParams
  } from "react-router-dom";



const  Chat  =  (props) => {
    
    const  {chatId}  = useParams();
    const {chatlist, sendi, deleteChat,plusChat} =props;
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
    

    const send = function ({value, name}) {
    
        let message = { author: name, text: value, id: faker.datatype.uuid(),}
        setMessageslist(messageslist.concat(message))
        sendi({message:message, key:par})
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

   
    return (

    <Grid container spacing={3}>
        <Grid item xs={3}>
            
            <Paper>
                <ChatList chatlist={chatlist} setMessag={setMessag} deleteChat={deleteChat}/>
            </Paper>
            <Fab onClick={()=>{plusChat()}} color="primary" aria-label="add">
                <AddIcon />
            </Fab>
        </Grid>
        <Grid item xs={9} >
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