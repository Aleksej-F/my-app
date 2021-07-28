import { List, ListItem, ListItemAvatar, ListItemText, Avatar} from '@material-ui/core';
              
import {Link} from "react-router-dom";            
              
              
export default function Chatlist (props) {
    const { chatlist, setMessag  } = props; 
    return (
        <List>
            {
            chatlist.map((item, key) => (
            <Link to={`/chats/${key}`} onClick={()=> {
                setMessag(key)
              }}>
                <ListItem key={item.id} className ='chat' >
                    <ListItemAvatar >
                        <Avatar alt={item.name} src={item.avatar}/>
                    </ListItemAvatar>
                    <ListItemText primary={item.name}/>
                </ListItem>
            </Link>
           ))
            }

        </List>
    )};

