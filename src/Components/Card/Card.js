import React, { Component } from 'react';


class Card extends Component {
  render() {
    return (
      <div class="row">
          <div class="col s12 m4">
          <div class="card">
            <div class="card-image waves-effect waves-block waves-light">
                <img class="activator" src="https://i.ibb.co/991rsFs/entrevistaperfecta-informatica31.jpg"/>
            </div>
            <div class="card-content">
                <span class="card-title activator grey-text text-darken-4">Informatica<i class="material-icons right">more_vert</i></span>
                <p><a href="#!">Ver Oferta</a></p>
            </div>
            <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
                 <p>Here is some more information about this product that is only revealed once clicked on.</p>
            </div>
          </div>

          </div>
      </div>
    );
  }
}


export default Card;