import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class Nav extends Component {
  state = {
    toggle: false,
  };
  menuToggle = () => {
    this.setState({
      toggle: !this.state.toggle,
    });
  };
  render() {
    const { toggle } = this.state;
    return (
      <>
        <ul className={toggle ? "toggle" : ""}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/Table">Table</NavLink>
          </li>
          <li>
            <NavLink to="/GridCard">Grid Card</NavLink>
          </li>
          <li>
            <NavLink to="/LogIn">Log In / Register</NavLink>
          </li>
          <li className="close" onClick={this.menuToggle}>
            X
          </li>
        </ul>
        <div className="menu" onClick={this.menuToggle}>
          Menu
        </div>
      </>
    );
  }
}

export default Nav;
