import React, { Component } from 'react';
class NavBar extends Component {
    render() {
        return (
            <nav className="nav-extended" >
                <div className="nav-wrapper blue">
                <a className="navbar-brand" href="/home" >
                    <img src="http://www.usap.edu/wp-content/uploads/2014/03/usap-logo-white-500c.png" width="250"
                     height="80" alt=""></img>
                </a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="/Login" onClick={()=> window.open("http://www.usap.edu/", "_blank")}>Pagina Principal</a></li>
                    <li><a href="/Login" onClick={()=> window.open("http://www.usap.edu/buzon-de-sugerencias/", "_blank")}>Sugerencias</a></li>
                    <li><a href="/Login" onClick={()=> window.open("http://www.usap.edu/contactenos/", "_blank")}>Contactanos</a></li>
                    <li><a href="/login">Salir</a></li>
                </ul>
                </div>
                <div className="nav-content blue">
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