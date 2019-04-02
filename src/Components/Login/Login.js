import React, { Component } from 'react';
import '../Login/Logincss.css';
//import Home from '../Home/Home';
//import Route from 'react-router-dom/Route';

class Login extends Component {
  render() {
    return (
      <div className="row login">
          <div className= "col s12 l3 offset-l1">
            <div className= "card">
              <div className="card-action blue white-text">
                    <h3>Login</h3>
                </div>
                <div className="card-content">
                    <div className="form-field">
                      <label for="username">Usuario</label>
                      <input type="text" id="username"></input>
                    </div>
                    <br/>
                    <div className="form-field">
                      <label for="password">Clave</label>
                      <input type="password" id="password"></input>
                    </div>
                    <br/>
                    <div className="form-field">
                    <label><input type="checkbox" /><span>Recordar</span></label>
                    </div>
                    <br/>
                    <div className="form-field center-align">
                        <button className="btn-large blue" >Ingresar</button>
                    </div>
                </div>
              </div>
            </div>
         </div>  
    );
  }
}

export default Login;