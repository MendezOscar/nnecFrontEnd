import React, { Component } from 'react';

class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <a className="navbar-brand" href="#" >
                USAP
                <span className="badge badge-pill badge-light ml-2">
                {this.props.counter}
                </span>
                </a>
            </nav>
        )
    }
}
export default NavBar;