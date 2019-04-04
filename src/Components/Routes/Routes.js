import React from 'react';
import {BrowserRouter,  Route,  Switch} from 'react-router-dom';
import Home from '../Home/Home';
import Login from '../Login/Login';

export default () => (
      <BrowserRouter >
      <Switch>
          <Route path="/home" component={Home}/>
          <Route path="/login" component={Login}/>
      </Switch>
  </BrowserRouter>
);