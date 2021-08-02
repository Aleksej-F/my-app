import { List, ListItem, ListItemAvatar, ListItemText, Avatar} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import {Link} from "react-router-dom";            
import { useSelector, useDispatch } from "react-redux";
import {createRemoveChat} from "../store/chats";           
import {createIdMessage} from "../store/messages"; 

export default function Chatlist (props) {
     
    
    const chatlist = useSelector((state) => state.chats.list);
    const dispatch = useDispatch(); 
    return (
        <List>
            {
            chatlist.map((item, keyi) => (
            <Link to={`/chats/${keyi}`} key={item.id} >
                <ListItem  className = {item.prizn ?'chat active':'chat'} >
                      
                    <ListItemAvatar onClick={()=> {
                        dispatch(createIdMessage(item.id))
                    }}>
                        <Avatar alt={item.name} src={item.avatar}/>
                    </ListItemAvatar>
                    <ListItemText onClick={()=> {
                         dispatch(createIdMessage(item.id))
                    }} primary={item.name}/>
                    
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

