import React, { Component } from "react";
import Home from "./section/Home";
import Table from "./section/Table";
import GridCard from "./section/GridCard";
import LogIn from "./section/LogIn";
import { Route, Switch } from "react-router-dom";

class Section extends Component {
  render() {
    return (
      <section>
        <Switch>
          <Route exact path="/" Component={Home} />
          <Route path="/Table" Component={Table} />
          <Route path="/GridCard" Component={GridCard} />
          <Route path="/LogIn" Component={LogIn} />
        </Switch>
      </section>
    );
  }
}

export default Section;
