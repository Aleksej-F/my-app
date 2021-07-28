import './App.css';

import React,{ useState, }  from "react";

import Chat  from './components/chat';
import Home  from './components/home';
import Profile from './components/profile';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  
} from "react-router-dom";
import faker from "faker"
const chatlist = Array.from( {length:10}).map(() => ({
  id: faker.datatype.uuid(),
  avatar: faker.image.avatar(),
  name: faker.name.findName(),
  messageslist: Array.from( {length:5}).map(() => ({
      id: faker.datatype.uuid(),
      author: faker.name.findName(), 
      text: faker.lorem.text()
  }))
}))



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
            path="/chats/:chatId?"
          >
            <Chat chatlist={chatlist}/>
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


 