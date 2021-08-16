import React, { useState, useRef, useEffect } from "react";
import Checkbox from '@material-ui/core/Checkbox';
import { Button, Input } from '@material-ui/core';
import { useSelector, useDispatch } from "react-redux";
import { addProfileWithFirebase, getProfaileChecked, createSaveProfileCheckendAction, initProfileTracking } from "../store/profile";

const Profile = (props) => {
  
  const profile = useSelector(getProfaileChecked);
  const dispatch = useDispatch(); 
  
  const [name, setName] = useState(profile.name);
  const [surname, setSurname] = useState(profile.surname);
  const [nick, setNick] = useState(profile.nick);
  
  const changeName = (event) => {
    setName(event.target.value);
  }
  const changeSurname = (event) => {
    setSurname(event.target.value);
  }
  const changeNick = (event) => {
    setNick(event.target.value);
  }

  const inputRef = useRef(null);
  useEffect(() => {
    inputFocus()
  },[]);

  const inputFocus = () => {
    inputRef.current?.focus();
  }
  useEffect(() => {
    dispatch(initProfileTracking());
  }, []);

    return (
      <div >
            Профиль
        <br></br>
        <br></br>
        
        <Input 
            placeholder="Введите имя" 
            inputProps={{ 'aria-label':'description'}} 
            inputRef={inputRef}
            value={name||profile.name} onChange={changeName}
          /> 
        <br></br> <br></br>
        <Input 
            placeholder="Введите Фамилию" 
            inputProps={{ 'aria-label':'description'}} 
            
            value={surname||profile.surname} onChange={changeSurname}
        /> 
        <br></br> <br></br>
        <Input 
            placeholder="Введите ник" 
            inputProps={{ 'aria-label':'description'}} 
            
            value={nick||profile.nick} onChange={changeNick}
          /> 
        <br></br> <br></br>
        
        <br></br>
        <br></br>
        <Button variant="contained" onClick={() => {
               console.log('сохр')
                dispatch(addProfileWithFirebase({name,surname,nick}));
              }} >Сохранить</Button>
      </div>
    
    ) 
    
   

};
/*
        <Checkbox
          checked={ profile.checked }
         /* onChange={(event) => {
            console.log('hhh' + checked )
            console.dir(event.target.checked)
            setChecked(!checked);
          }}
          onChange={(event) => {
            console.log('hhh' + profile.checked )
            
            dispatch(createSaveProfileCheckendAction())
          }}
          inputProps={{ 'aria-label': 'primary checkbox' }}
        />*/

export default Profile ;