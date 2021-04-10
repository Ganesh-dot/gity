import React from "react";
import Header from "./components/Header";
import Section from "./components/Section";
import Table from "./components/section/Table";
import { BrowserRouter as Router } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Header />
        <Table />
        <Section />
      </Router>
    );
  }
}

export default App;
