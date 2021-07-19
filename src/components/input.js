import React, { useState } from "react";


function Counter(props) {
    const {send} = props;
    const [value, setValue] = useState('');
    
    const handleChange = (event) => {
      setValue(event.target.value);
    }
     
    return (
      <div>
       
          <p>Введите сообщение</p>
          <input type="text" value={value} onChange={handleChange} />
          
          
          <button onClick={()=> send({value:value, name:'Anrej'})}>SEND</button>
             
       
      </div>
    )
}
  
export default Counter