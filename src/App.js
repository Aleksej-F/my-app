import './App.css';
import React,{ useState}  from "react";
import Chat  from './components/chat';
import Home  from './components/home';
import Profile from './components/profile';
import {BrowserRouter,Switch,Route,Link} from "react-router-dom";
import faker from "faker"



let list = Array.from( {length:10}).map(() => ({
  id: faker.datatype.uuid(),
  avatar: faker.image.avatar(),
  name: faker.name.findName(),
  priz: false,
  messageslist: Array.from( {length:5}).map(() => ({
      id: faker.datatype.uuid(),
      author: faker.name.findName(), 
      text: faker.lorem.text()
  }))
}))



export default function App() {
  const [chatlist, setChatlist] = useState(list)
  
  const sendi = function ({message,key}) {
    list[key].messageslist.push(message)
    setChatlist(list)
  }; 

  const deleteChat = function (keyi) {
    list.splice(keyi, 1)
    setChatlist(list)  
  }
  
  const plusChat = function () {
    list = list.concat({
      id: faker.datatype.uuid(),
      avatar: faker.image.avatar(),
      name: faker.name.findName(),
      priz: false,
      messageslist: Array.from( {length:5}).map(() => ({
          id: faker.datatype.uuid(),
          author: faker.name.findName(), 
          text: faker.lorem.text()
      }))
    })  
    setChatlist(list) 
  }
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
            <Chat chatlist={chatlist} sendi={sendi} deleteChat={deleteChat} plusChat={plusChat}/>
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


 