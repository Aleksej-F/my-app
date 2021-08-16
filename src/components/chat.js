import MessageList  from './messageList';
import ChatList  from './chatListFild';
import { Grid, Paper,} from '@material-ui/core';
import React from "react";

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import {Route} from "react-router-dom";
import { useDispatch } from "react-redux";
import { createAddChat} from "../store/chats";


const  Chat  =  () => {
    const dispatch = useDispatch();
     
    return (

    <Grid container spacing={3}>
        <Grid item xs={3}>
            <Paper>
                <ChatList />
            </Paper>
            <Fab onClick={()=>{
                console.log('добавить чат')
                dispatch(createAddChat())

                }} color="primary" aria-label="add">
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