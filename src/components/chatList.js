import React, { useState } from "react";
import { List, ListItem, ListItemAvatar, ListItemText, Avatar} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import {Link} from "react-router-dom";            
import { useSelector, useDispatch } from "react-redux";
import {createRemoveChat,createActiveChat, getChatlist} from "../store/chats";           
import {createIdMessage} from "../store/messages"; 


export default function Chatlist (props) {
     
    const [value, setValue] = useState('');
    const chatlist = useSelector( getChatlist );
    const dispatch = useDispatch(); 
    
    return (
        <List>
            {
            chatlist.map((item, keyi) => (
                <Link to={`/chats/${keyi}`} key={item.id} >
                    <ListItem  className = {item.prizn ?'chat active':'chat'} >
                       <div className = 'chat_bloc' onClick={()=> {
                            dispatch(createIdMessage(item.id))
                            dispatch(createActiveChat(value))
                            setValue(keyi)
                        }}>     
                        <ListItemAvatar >
                            <Avatar alt={item.name} src={item.avatar}/>
                        </ListItemAvatar>
                        
                        <ListItemText primary={item.name}/>
                        </div>
                        <IconButton id={item.id}  aria-label="delete">
                            <DeleteIcon id={item.id} fontSize="small" onClick={() => {
                                console.log(item.id)
                                dispatch(createRemoveChat(item.id))
                                dispatch(createIdMessage(''))
                            }}
                            />
                        </IconButton>
                    </ListItem>
                </Link>
            ))
            }

        </List>
    )};

