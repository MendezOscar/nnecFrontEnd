import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';
import Login from './Components/Login/Login'
import Home from './Components/Home/Home';



class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/home" component={Home} />
        </Switch>
    </Router>
    );
  }
}

export default App;
