import React, { Component } from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Carreras from './Components/Carreras/Carreras';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <br/>
        <Carreras/>
      </div>
    );
  }
}

export default App;
