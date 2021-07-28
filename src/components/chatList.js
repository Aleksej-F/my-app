import { List, ListItem, ListItemAvatar, ListItemText, Avatar} from '@material-ui/core';
              
import {Link} from "react-router-dom";            
              
              
const  Chatlist  =  (props) => {
    const { chatlist, setMessagesList } = props; 
    return (
        <List>
            {
            chatlist.map((item, key) => (
            <Link to={`/chats/${key}`}>
                <ListItem key={item.id} className ='chat' onClick={setMessagesList(key)}>
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

export default Chatlist