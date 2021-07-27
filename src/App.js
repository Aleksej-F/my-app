import './App.css';

import React from "react";

import Chat  from './components/chat';
import Home  from './components/home';
import Profile from './components/profile';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";




export default function App() {
 
   return (
    <div className="App">
     
     <BrowserRouter>
        <header className="header">
            <ul>
              <li>
                <Link to="/profile">Profile</Link>
              </li>

              <li>
                <Link to="/chats">Chats</Link>
              </li>

              <li>
                <Link to="/">Home</Link>
              </li>
            </ul>
        </header>

         
        <Switch>
   
          <Route path="/profile">
             <Profile />
          </Route>
   
          <Route
            
            path="/chats/:chatId"
          >
            <Chat />
          </Route>

          <Route exact path="/">
            <Home />
          </Route>

          <Route>
            <h3>Page not found</h3>
          </Route>

   
        </Switch>
   
      </BrowserRouter>
     
    </div>
  );
}


 