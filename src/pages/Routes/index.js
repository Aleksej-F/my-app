import React, {useEffect, useState} from 'react';
import {Route, Switch} from "react-router-dom";
import firebase from "firebase";


import {PublicRoute} from "../../hocs/PublicRoute";
import {PrivateRoute} from "../../hocs/PrivateRoute";

import Chat  from '../../components/chat';
import Home  from '../../components/home';
import Profile from '../../components/profile';
import GistsList from '../../components/gistsList'
import GistsList2 from '../../components/gistsList2'
import Login  from '../Login';
import SignUp  from '../SignUp';

export const Routes  = (props) => {
  const [auth, setAuth] = useState(false);
  console.log(auth)
  useEffect(() => {

    firebase.auth().onAuthStateChanged((user) => {
      console.log(user,auth)
      if (user) {
        setAuth(true);
      } else {
        setAuth(false);
      }
    })

  }, [])

return (
  
         
  <Switch>
   
    <PrivateRoute auth={auth} exact path="/profile">
      <Profile />
    </PrivateRoute>
    <PrivateRoute auth={auth} exact path="/chats/:chatId?" >
      <Chat />
    </PrivateRoute>
    <PublicRoute exact path="/">
      <Home />
    </PublicRoute>
    <Route path="/gists">
      <GistsList />
    </Route>
    <Route path="/gists2">
      <GistsList2 />
    </Route>
    <PublicRoute auth={auth} exact path="/login">
      <Login />
    </PublicRoute>
    <PublicRoute auth={auth} exact path="/signup">
      <SignUp />
    </PublicRoute>
    <Route>
      <h3>Page not found</h3>
    </Route>


  </Switch>
)


};