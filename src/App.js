import './App.css';
import React  from "react";
import Chat  from './components/chat';
import Home  from './components/home';
import Profile from './components/profile';
import {BrowserRouter,Switch,Route,Link} from "react-router-dom";





export default function App() {
 
   return (
    <div className="App">
     
     <BrowserRouter>
        <header className="header">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              

              <li>
                <Link to="/chats">Chats</Link>
              </li>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              
            </ul>
        </header>

         
        <Switch>
   
          <Route path="/profile">
             <Profile />
          </Route>
   
          <Route
            path="/chats"
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


 