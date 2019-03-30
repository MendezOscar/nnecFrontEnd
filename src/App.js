import React, { Component } from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import SideNav from './Components/SideNav/SideNav';
class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <br/>
        <SideNav/>
      </div>
    );
  }
}

export default App;
