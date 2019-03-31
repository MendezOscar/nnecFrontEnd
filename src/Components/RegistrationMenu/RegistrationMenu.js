import React, { Component } from 'react';


class RegistratioMenu extends Component {
  render() {
    return (
      <div className="page">
        <ul class="collapsible">
        <li>
            <div class="collapsible-header">
            <i class="material-icons">library_books</i>
            Oferta Academica
            </div>
            <div class="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
        </li>
        <li>
            <div class="collapsible-header">
            <i class="material-icons">rate_review</i>
            Incripcion Matricula
            </div>
            <div class="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
        </li>
        </ul>
      </div>
    );
  }
}

export default RegistratioMenu;