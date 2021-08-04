import React, { useState, useRef, useEffect } from "react";
import { Button, Input, Icon } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from "react-redux";
import {createIdMessage, createAddMessage, getMessageListId} from "../store/messages"; 





const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));



function Counter(props) {
  const id = useSelector(getMessageListId); 
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
              dispatch(createAddMessage({id: id, value: value}))
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