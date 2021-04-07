import React, { Component } from "react";
import Home from "./section/Home";
import Table from "./section/Table";
import GridCard from "./section/GridCard";
import LogIn from "./section/LogIn";
import { Route } from "react-router-dom";

class Section extends Component {
  render() {
    return (
      <section>
        <Route path="/" Component={Home} />
        <Route path="/table" Component={Table} />
        <Route path="/gridcard" Component={GridCard} />
        <Route path="/login" Component={LogIn} />
      </section>
    );
  }
}

export default Section;
