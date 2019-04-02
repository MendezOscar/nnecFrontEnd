import React from 'react';
import {Route} from 'react-router';
import Home from '../Home/Home';

export default () => (
      <Route exact path="/home" component={Home}/>
);