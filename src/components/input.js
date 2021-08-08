import React, { useState, useRef, useEffect, useCallback  } from "react";
import { Button, Input, Icon } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch} from "react-redux";
import {createAddMessage, getMessageListId} from "../store/messages"; 
import { getProfaileChecked} from "../store/profile";
import generateBotPhrase from "./bot/botPhrase"
const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));



function Counter(props) {
  const chatid = useSelector(getMessageListId); 
  const profile = useSelector(getProfaileChecked);
  const dispatch = useDispatch(); 
  
    
    const [value, setValue] = useState('');
    const classes = useStyles();
    const inputRef = useRef(null);

    const handleChange = (event) => {
      setValue(event.target.value);
    }
    
    useEffect(() => {
      inputFocus()
    },[]);

    const inputFocus = () => {
      inputRef.current?.focus();
    }
     
    
    const addMessageWithThunk = ({id, message}) => (dispatch, getState) => {
      dispatch(createAddMessage({id, message}));
      if (message.author !== 'Bot') {
       
        const botMessage = generateBotPhrase();
         setTimeout(() => dispatch(createAddMessage({id, message:{value:botMessage, author: 'Bot'}})), 2000);
      }
    }


    const onAddMessage = useCallback((message) => {
       dispatch(addMessageWithThunk({id:chatid, message:message}));
    }, [chatid, dispatch]);
    

    return (
      <div>
          <Input 
            placeholder="Введите сообщение" 
            inputProps={{ 'aria-label':'description'}} 
            inputRef={inputRef}
            value={value} onChange={handleChange}
          />
           
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            endIcon={<Icon>send</Icon>}
            onClick={()=> {
              onAddMessage({value:value, author: profile.nick})
              setValue('');
              inputFocus()
            }}
          >
            Send
          </Button>        
         
             
       
      </div>
    )
}
  
export default Counter