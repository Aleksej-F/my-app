import { List, Grid, Paper, ListItem, ListItemAvatar, ListItemText, Avatar} from '@material-ui/core';
              
              
              
              
const  Chatlist  =  (props) => {
    const { chatlist } = props; 
    return (
        <List>
            {
            chatlist.map((item) => (
            <ListItem key={item.id}>
                <ListItemAvatar >
                    <Avatar alt={item.name} src={item.avatar}/>
                </ListItemAvatar>
                <ListItemText primary={item.name}/>
            </ListItem>))
              }

            </List>
               );
            };

export default Chatlist