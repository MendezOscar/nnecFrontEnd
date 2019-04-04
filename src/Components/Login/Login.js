import React, { Component } from 'react';
import '../Login/Logincss.css';
import NavBarLogin from '../NavBarLogin/NavBarLogin';

class Login extends Component {

  render() {
    return (
      <div>
        <NavBarLogin/>
        <div className="row login">
          <div className= "col s11 l3 offset-l8">
            <div className= "card">
              <div className="card-action blue white-text">
                    <h3>INGRESAR</h3>
                </div>
                <div className="card-content">
                    <div className="form-field">
                      <label className="username">Usuario</label>
                      <input type="text" id="username"></input>
                    </div>
                    <br/>
                    <div className="form-field">
                      <label className="password">Clave</label>
                      <input type="password" id="password"></input>
                    </div>
                    <br/>
                    <div className="form-field">
                    <label><input type="checkbox" /><span>Recordar</span></label>
                    </div>
                    <br/>
                    <div className="form-field center-align">
                    <a className="waves-effect waves-light btn-large" href="/home">Ingresar</a>
                    </div>
                </div>
              </div>
            </div>
         </div>  
         </div>
      
    );
  }
}

export default Login;