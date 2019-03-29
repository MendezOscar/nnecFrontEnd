import React, { Component } from 'react';

class Carreras extends Component {

    constructor(props){
        super(props);
        this.state = {
          items: [],
          isLoaded: false,
        }
      }
      
      componentDidMount(){
        fetch('http://localhost:40967/api/Carreras')
        .then(res => res.json())
        .then(json => {
          this.setState({
            isLoaded: true,
            items: json,
          })
        });
      }

    render() {
      var {items} = this.state;
        return (
          <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">DESCRIPCION</th>
              <th scope="col">DIRECTOR</th>
              <th scope="col">CODIGO</th>
            </tr>
          </thead>
          <tbody>
          {items.map((carrera, i) =>
              <tr key={i} value={carrera}>
                <td>{carrera.idCarrera}</td>
                <td>{carrera.descripcionCarrera}</td>
                <td>{carrera.directorCarrera}</td>
                <td>{carrera.codigoCarrera}</td>
              </tr>
          )}
          </tbody>
        </table>
        )
    }
}
export default Carreras;