import React, { Component } from 'react';

class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <a className="navbar-brand" href="1">
                    <img src="http://www.usap.edu/wp-content/uploads/2018/06/Logo-USAP-naranja-2.png" width="170"
                     height="60" alt=""></img>
                </a>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="Inicio"> Inicio <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="dropdown">
                        <a className="nav-link dropdown-toggle" href="1" id="navbarDropdownMenuLink" role="button"
                             data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                Informacion
                        </a>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="Carreras">Carreras</a>
                                <a className="dropdown-item" href="Seguridad">Seguridad</a>
                                <a className="dropdown-item" href="Historial_de_notas">Historial de notas</a>
                                <a className="dropdown-item" href="Perfil_de_estudiante">Perfil de estudiante</a>
                                <a className="dropdown-item" href="Puntos_co-Programaticos">Puntos co-Programaticos</a>
                                <a className="dropdown-item" href="Actualizacion_de_correo_electronico">Actualizacion de correo electronico</a>
                            </div>
                        </li>
                        <li className="dropdown">
                        <a className="nav-link dropdown-toggle" href="1" id="navbarDropdownMenuLink" role="button"
                             data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                Horarios
                        </a>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="Horarios_de_alumno">Horarios de alumno</a>
                                <a className="dropdown-item" href="Horarios_de_clase">Horarios de clase</a>
                                <a className="dropdown-item" href="Claces_canceladas">Claces canceladas</a>
                            </div>
                        </li>
                        <li className="dropdown">
                        <a className="nav-link dropdown-toggle" href="1" id="navbarDropdownMenuLink" role="button"
                             data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                Matricula
                        </a>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="Inscripcion_de_asignatura">Inscripcion de asignatura</a>
                                <a className="dropdown-item" href="Cambio_de_asignatura">Cambio de asignatura</a>
                                <a className="dropdown-item" href="Cambio_de_asignatura_por_asignacion">Cambio de asignatura por asignacion</a>
                                <a className="dropdown-item" href="Retiro_de_asigantura">Retiro de asigantura</a>
                                <a className="dropdown-item" href="Resumen_de_matricula">Resumen de matricula</a>
                                <a className="dropdown-item" href="Preferencias_de_inscripcion">Preferencias de inscripcion</a>
                            </div>
                        </li>
                        <li className="dropdown">
                        <a className="nav-link dropdown-toggle" href="1" id="navbarDropdownMenuLink" role="button"
                             data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                Financiero
                        </a>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="Detalle_a_pagar">Detalle a pagar</a>
                                <a className="dropdown-item" href="Pagar">Pagar</a>
                                <a className="dropdown-item" href="Suficiencia">Suficiencia</a>
                                <a className="dropdown-item" href="Examen_extraordinario">Examen extraordinario</a>
                                <a className="dropdown-item" href="Tramites">Tramites</a>
                                <a className="dropdown-item" href="Estados_de_cuenta">Estados de cuenta</a>
                                <a className="dropdown-item" href="Historico_de_pagos">Historico de pagos</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
export default NavBar;