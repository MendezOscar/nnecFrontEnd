import React, { Component } from 'react';

class NavBarLogin extends Component {
    render() {
        return (
            <nav className="nav-extended" >
                <div className="nav-wrapper blue">
                <a className="navbar-brand col s4" href="/login" >
                    <img src="http://www.usap.edu/wp-content/uploads/2014/03/usap-logo-white-500c.png" width="250"
                     height="80" alt="" ></img>
                </a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="/Login" onClick={()=> window.open("http://www.usap.edu/", "_blank")}>Pagina Principal</a></li>
                    <li><a href="/Login" onClick={()=> window.open("http://www.usap.edu/buzon-de-sugerencias/", "_blank")}>Sugerencias</a></li>
                    <li><a href="/Login" onClick={()=> window.open("http://www.usap.edu/contactenos/", "_blank")}>Contactanos</a></li>
                    <li><a href="collapsible.html">Ayuda en linea</a></li>
                </ul>
                </div>
            </nav>
        )
    }
}
export default NavBarLogin;