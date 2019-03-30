import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from "materialize-css/dist/js/materialize.min.js";

class SideNav extends Component {

    componentDidMount() {
        var elem = document.querySelector(".sidenav");
        var instance = M.Sidenav.init(elem, {
            edge: "left",
            inDuration: 250
        });
    }
    
  render() {
    return (
        <div>
            <ul id="slide-out" class="sidenav">
            <li>
                <a href="#user"><img className="circle" src="https://i.ibb.co/Bwq9WvJ/descarga.jpg" alt="businessman-863430" border="0"/></a>
                <br/>
                <br/>
                 <br/>
                <a href="#name"><span className="black-text name">Demmy Johan</span></a>
                <a href="#email"><span className="black-text email">Demmy.aguilar@usap.edu</span></a>
                <li><div className="divider"></div></li>
            </li>
            <li><a href="#!"><i class="material-icons">cloud</i>First Link With Icon</a></li>
            <li><a href="#!">Second Link</a></li>
            <li><a className="subheader">Subheader</a></li>
            <li><a className="waves-effect" href="#!">Third Link With Waves</a></li>
            </ul>
            <a href="#1" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
        </div> 
    );
  }
}

export default SideNav;
