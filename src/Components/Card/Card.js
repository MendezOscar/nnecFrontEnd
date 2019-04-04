import React, { Component } from 'react';


class Card extends Component {
  render() {
    return (
      <div className="row">
          <div className="col s12 m4">
          <div className="card">
            <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src="https://i.ibb.co/991rsFs/entrevistaperfecta-informatica31.jpg"/>
            </div>
            <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">Informatica<i className="material-icons right">more_vert</i></span>
                <p><a href="#!">Ver Oferta</a></p>
            </div>
            <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
                 <p>Here is some more information about this product that is only revealed once clicked on.</p>
            </div>
          </div>

          </div>
      </div>
    );
  }
}


export default Card;