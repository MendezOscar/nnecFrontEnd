import React, { Component } from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import SideNav from './Components/SideNav/SideNav';
import Card from './Components/Card/Card';
import RegistratioMenu from './Components/RegistrationMenu/RegistrationMenu';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <br/>
        <SideNav/>
        <div class="row">
          <div class="col s12 m4 l3">
          <RegistratioMenu/>
          </div>
          <div class="col s12 m8 l9">
            <Card/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
