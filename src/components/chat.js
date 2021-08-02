import MessageList  from './messageList';
import ChatList  from './chatList';
import { Grid, Paper,} from '@material-ui/core';
import React, { useState, useEffect } from "react";

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import {Route} from "react-router-dom";
import {useParams} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
  import { createAddChat} from "../store/chats";


const  Chat  =  () => {
    const dispatch = useDispatch();

    const {chatId}  = useParams();
  
    console.log ('chatId - ' + chatId)
    
        
    return (

    <Grid container spacing={3}>
        <Grid item xs={3}>
            
            <Paper>
                <ChatList />
            </Paper>
            <Fab onClick={()=>{dispatch(createAddChat())}} color="primary" aria-label="add">
                <AddIcon />
            </Fab>
        </Grid>
        <Grid item xs={9} >
            <Route
                path="/chats/:chatId"
            >
                <MessageList/>   
          </Route>
            
            
           
           
        </Grid>  
    </Grid>
    );
};

export default Chat