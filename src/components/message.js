import React from "react";


export const Message = (props) => {
    const { count } = props;
  
    return (
      <div className="App-div">
        <p> {count} </p>
      </div>
    );
  };