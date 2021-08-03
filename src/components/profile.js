import React,{ useState } from "react";
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import { useSelector, useDispatch } from "react-redux";
import { createSaveProfileAction, getProfaileChecked } from "../store/profile";

const Profile = (props) => {
  
  const profile = useSelector(getProfaileChecked);
     
  const dispatch = useDispatch(); 
  

    return (
      <div >
            Профиль
            <br></br>
            <br></br>
        <Checkbox
          checked={ profile}
         /* onChange={(event) => {
            console.log('hhh' + checked )
            console.dir(event.target.checked)
            setChecked(!checked);
          }}*/
          onChange={(event) => {
            console.log('hhh' + profile )
            
            dispatch(createSaveProfileAction())
          }}
          inputProps={{ 'aria-label': 'primary checkbox' }}
        />
        <br></br>
        <br></br>
        <Button variant="contained" o onClick={() => {
               
                dispatch(createSaveProfileAction());
              }} >Default</Button>
      </div>
    
    ) 
    
   

};


export default Profile ;