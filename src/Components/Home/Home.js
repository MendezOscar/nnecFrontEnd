import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';


class Home extends Component {
  render() {
    return (
      <div className="page">
        <NavBar/>
        <br/>
        <h1>Bienvenido a Siga Web</h1>
      </div>
    );
  }
}

export default Home;