import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from "materialize-css/dist/js/materialize.min.js";

class SideNav extends Component {

    componentDidMount() {
        var elem = document.querySelector(".sidenav");
        M.Sidenav.init(elem, {
            edge: "right",
            inDuration: 250
        });
    }
    
  render() {
    return (
        <div>
            <ul id="slide-out" className="sidenav">
            <li>
                <a href="#user"><img className="circle" src="https://i.ibb.co/Bwq9WvJ/descarga.jpg" alt="businessman-863430" border="0"/></a>
                <br/>
                <br/>
                 <br/>
                <a href="#name"><span className="black-text name">Demmy Johan</span></a>
                <a href="#email"><span className="black-text email">Demmy.aguilar@usap.edu</span></a>
                <div className="divider"></div>
            </li>
            <li><a href="#!">First Link With Icon</a></li>
            <li><a href="#!">Second Link</a></li>
            </ul>
            <a href="#1" data-target="slide-out" className="btn-floating btn-large  waves-light red blue sidenav-trigger right"><i className="material-icons right">add</i></a>
        </div> 
    );
  }
}

export default SideNav;
