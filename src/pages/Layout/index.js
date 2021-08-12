import React from 'react';
import {Link} from "react-router-dom";


export const Layout = ({children}) => {
  return (
    <div className="App">
      <header className="header">
        <ul >
        <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/chats">Chats</Link>
              </li>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <Link to="/gists">Gists</Link>
              </li>
              <li>
                <Link to="/gists2">Gists2</Link>
              </li>
              

        </ul>
      </header>
      <div >
        {children}
      </div>
    </div>
  );
};