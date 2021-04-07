import React, { Component } from "react";
import { Link } from "react-router-dom";

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
