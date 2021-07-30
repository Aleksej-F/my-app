import { List, ListItem, ListItemAvatar, ListItemText, Avatar} from '@material-ui/core';

import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import {Link} from "react-router-dom";            
              
              
export default function Chatlist (props) {
    const { chatlist, setMessag, deleteChat} = props; 

   
    return (
        <List>
            {
            chatlist.map((item, keyi) => (
            <Link to={`/chats/${keyi}`} key={item.id} >
                <ListItem  className = {item.prizn ?'chat active':'chat'} >
                      
                    <ListItemAvatar onClick={()=> {setMessag(keyi)}}>
                        <Avatar alt={item.name} src={item.avatar}/>
                    </ListItemAvatar>
                    <ListItemText onClick={()=> {setMessag(keyi)}} primary={item.name}/>
                    
                    <IconButton id={item.id}  aria-label="delete">
                         <DeleteIcon id={item.id} fontSize="small" onClick={()=>{deleteChat(keyi)}}/>
                    </IconButton>
                </ListItem>
            </Link>
           ))
            }

        </List>
    )};

