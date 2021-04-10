import React from "react";
import Header from "./components/Header";
import Section from "./components/Section";
import LogIn from "./components/section/LogIn";
import { BrowserRouter as Router } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Header />
        <Section />
        <LogIn />
      </Router>
    );
  }
}

export default App;
