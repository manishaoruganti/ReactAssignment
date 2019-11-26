import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./nav.css";

class Navigation extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
          
          <ul className="navbar-nav">
            <Link to="/">
              <li className="nav-item">
                <a className="nav-link">Home</a>
              </li>
            </Link>

            <Link to="/components/addproduct">
              <li className="nav-item">
                <a className="nav-link">Add product</a>
              </li>
            </Link>
          </ul>
        </nav>
      </React.Fragment>
    );
  }
}

export default Navigation;
