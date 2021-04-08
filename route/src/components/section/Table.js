import React, { Component } from "react";

class Table extends Component {
  state = {
    loading: false,
    person: null,
  };

  async componentDidMount() {
    const url = "https://api.randomuser.me/";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({
      person: data.results[0],
    });
  }
  render() {
    return <div></div>;
  }
}

export default Table;
