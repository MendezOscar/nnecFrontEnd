import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import RegistrationMenu from '../RegistrationMenu/RegistrationMenu';
import SideNav from '../SideNav/SideNav';


class Home extends Component {
  render() {
    return (
      <div className="page">
        <NavBar />
        <br/>
        <div className="row">
          <div className="col s12 m4 l3">
          <RegistrationMenu/>
          </div>
          <div className="col s12 m8 l9">
          <SideNav/>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;