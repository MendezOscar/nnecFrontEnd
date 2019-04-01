import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from "materialize-css";


class RegistrationMenu extends Component {

  componentDidMount() {
    M.AutoInit();
    //var elem = document.querySelector('.collapsible.expandable');
    //M.Collapsible.init(elem, {
    //accordion: false
    //});
  }

  render() {
    return (
      <div className="page">
        <ul class="collapsible popout"> 
        <li>
            <div class="collapsible-header">
            <i class="material-icons">assignment</i>
            Ingreso Oferta Academica
            </div>
            <div class="collapsible-body">
              <div class="collection">
                <a href="#!" class="collection-item orange-text">Consulta clases por plan</a>
                <a href="#!" class="collection-item orange-text">Oferta academica</a>
                <a href="#!" class="collection-item orange-text">Reportes de oderta academica</a>
              </div>
            </div>
        </li>
        <li>
            <div class="collapsible-header">
            <i class="material-icons">assignment_turned_in</i>
              Inscripcion Matricula
            </div>
            <div class="collapsible-body">
              <div class="collection">
                <a href="#!" class="collection-item orange-text">Matricula</a>
                <a href="#!" class="collection-item orange-text">Reportes matricula</a>
              </div>
            </div>
        </li>
        <li>
            <div class="collapsible-header">
            <i class="material-icons">assignment_returned</i>
            Cambio y Retiros de clase
            </div>
            <div class="collapsible-body">
              <div class="collection">
                <a href="#!" class="collection-item orange-text">Retiros</a>
                <a href="#!" class="collection-item orange-text">Cambio de asignatura</a>
                <a href="#!" class="collection-item orange-text">Cambio de asignatura sin costo</a>
              </div>
            </div>
        </li>
        </ul>
      </div>
    );
  }
}

export default RegistrationMenu;