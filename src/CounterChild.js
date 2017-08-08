import React from "react";

import Counter from './Counter';

class CounterChild extends Counter {
  constructor(props) {
    console.log('CounterChild.constructor');
    super(props);

    this.state = {
      counter: 0
    };
  }

  componentWillMount() {
      console.log('CounterChild.componentWillMount');
  }

  componentDidMount() {
      console.log('CounterChild.componentDidMount');
  }

  componentWillReceiveProps(nextProps) {
      console.log('CounterChild.componentWillReceiveProps', nextProps);
  }

  shouldComponentUpdate(nextProps, nextState) {
      console.log('CounterChild.shouldComponentUpdate', nextProps, nextState);
      return true;
  }

  componentWillUpdate(nextProps, nextState) {
      console.log('CounterChild.componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate(prevProps, prevState) {
      console.log('CounterChild.componentDidUpdate', prevProps, prevState);
  }

  componentWillUnmount() {
      console.log('CounterChild.componentWillUnmount');
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1
    });
  }

  decrement() {
    let newCount = this.state.counter - 1;
    if (newCount < 0) {
      newCount = 0;
    }
    this.setState({
      counter: newCount
    });
  }

  reset() {
    this.setState({
      counter: 0
    });
  }

  render() {
    console.log('CounterChild.render');
    const { num } = this.props;
    const { counter } = this.state;

    return (
      <div className="counter">
        <h2>
          Child Counter #{num}: {counter}
        </h2>
        <nav>
          <button onClick={this.increment}>+</button>
          <button onClick={this.decrement}>-</button>
          <button onClick={this.reset}>reset</button>
        </nav>
      </div>
    );
  }
}

export default CounterChild;