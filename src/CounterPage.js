import React, { Component } from "react";

import "./App.css";

import { Link } from "react-router-dom";
import Counter1 from "./Counter1";

class CounterPage extends Component {
  render() {
    const { num } = this.props;

    return (
      <div>
        <Counter1 num={num} />
      </div>
    );
  }
}

export default CounterPage;
