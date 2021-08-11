import React, {useEffect, useState} from 'react';
import {Route, Switch} from "react-router-dom";
import firebase from "firebase";


//import {PublicRoute} from "../../hocs/PublicRoute";
//import {PrivateRoute} from "../../hocs/PrivateRoute";

import Chat  from '../../components/chat';
import Home  from '../../components/home';
import Profile from '../../components/profile';
import GistsList from '../../components/gistsList'
import GistsList2 from '../../components/gistsList2'

export const Routes  = (props) => {
  const [auth, setAuth] = useState(false);
/*
  useEffect(() => {

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setAuth(true);
      } else {
        setAuth(false);
      }
    })

  }, [])*/

return (
  
         
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
    <Route path="/gists">
      <GistsList />
    </Route>
    <Route path="/gists2">
      <GistsList2 />
    </Route>

    <Route>
      <h3>Page not found</h3>
    </Route>


  </Switch>
)


/*
  return (
    <Switch>
      <PublicRoute auth={auth} exact path="/">
        <Home />
      </PublicRoute>
      <PublicRoute auth={auth} exact path="/login">
        <Login />
      </PublicRoute>
      <PublicRoute auth={auth} exact path="/signup">
        <SignUp />
      </PublicRoute>
      <Route exact path="/posts">
        <Posts />
      </Route>
      <Route path="/posts/:postId">
        <Post />
      </Route>
      <PrivateRoute auth={auth} exact path="/createPost">
        <CreatePost />
      </PrivateRoute>
      <PrivateRoute auth={auth} path="/profile">
        <Profile />
      </PrivateRoute>
    </Switch>
  );*/
};