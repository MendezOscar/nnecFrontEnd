import React, { Component } from 'react';
class NavBar extends Component {
    render() {
        return (
            <nav className="nav-extended" >
                <div className="nav-wrapper" class = 'blue'>
                <a className="navbar-brand" href="1" >
                    <img src="http://www.usap.edu/wp-content/uploads/2018/06/Logo-USAP-naranja-2.png" width="170"
                     height="60" alt=""></img>
                </a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="sass.html">Sugerencias</a></li>
                    <li><a href="badges.html">Acerca de</a></li>
                    <li><a href="collapsible.html">Salir</a></li>
                </ul>
                </div>
                <div className="nav-content" class='blue'>
                <ul className="tabs tabs-transparent">
                    <li className="tab"><a className="active" href="#Seguridad">Seguridad</a></li>
                    <li className="tab"><a className="active" href="#Mantenimiento">Mantenimiento</a></li>
                    <li className="tab"><a className="active" href="#Matricula">Matricula</a></li>
                    <li className="tab"><a className="active" href="#Reportes">Reportes</a></li>
                    <li className="tab"><a className="active" href="#Cajas">Cajas</a></li>
                    <li className="tab"><a className="active" href="#Registro">Registro</a></li>
                    <li className="tab"><a className="active" href="#Recursos_Humanos">Recursos Humanos</a></li>
                </ul>
                </div>
            </nav>
        )
    }
}
export default NavBar;