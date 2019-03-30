import React, { Component } from 'react';

class SideNav extends Component {

  render() {
    return (
        <div>
            <ul id="slide-out" class="sidenav">
            <li>
                <di class="background">
                    <img src="images/office.jpg"/>
                </di>
                <a href="#user"><img class="circle" src="images/yuna.jpg"/></a>
                <a href="#name"><span class="white-text name">John Doe</span></a>
                <a href="#email"><span class="white-text email">jdandturk@gmail.com</span></a>
            </li>
            <li><a href="#!"><i class="material-icons">cloud</i>First Link With Icon</a></li>
            <li><a href="#!">Second Link</a></li>
            <li><div class="divider"></div></li>
            <li><a class="subheader">Subheader</a></li>
            <li><a class="waves-effect" href="#!">Third Link With Waves</a></li>
            </ul>
            <a href="#" data-target="slide-out" class="sidenav-trigger"><i class="material-icons">menu</i></a>
        </div>
    );
  }
}

export default SideNav;
