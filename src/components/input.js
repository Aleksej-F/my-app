import React, { useState, useRef, useEffect } from "react";
import { Button, Input, Icon } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';






const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));



function Counter(props) {
    const {send} = props;
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
     //<input type="text" value={value} onChange={handleChange} />
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
              send({value:value, name:'Anrej'});
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