import React, { Component } from "react";
import { Link, Router } from "react-router-dom";

export class Nav extends Component {
  render() {
    return (
      <>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Table">Table</Link>
          </li>
          <li>
            <Link to="/GridCard">Grid Card</Link>
          </li>
          <li>
            <Link to="/LogIn">Log In / Register</Link>
          </li>
        </ul>
      </>
    );
  }
}

export default Nav;
