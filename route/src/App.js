import React from "react";
import "./App.css";
import Header from "./components/Header";
import Section from "./components/Section";
import Table from "./components/section/Table";
import GridCard from "./components/section/GridCard";
import { BrowserRouter as Router } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Header />
        <Section />
        <GridCard />
        <Table />
      </Router>
    );
  }
}

export default App;
