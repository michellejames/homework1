import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Counter.css';

class Counter1 extends Component {
    constructor(props) {
      super(props);

      this.increment = this.increment.bind(this);
      this.decrement = this.decrement.bind(this);
      this.reset = this.reset.bind(this);

      this.state = {
        counter: 0,
      };
    }

    componentWillMount() {
        console.log('Counter1.componentWillMount');
    }

    componentDidMount() {
        console.log('Counter1.componentDidMount');
    }

    componentWillReceiveProps(nextProps) {
        console.log('Counter1.componentWillReceiveProps', nextProps);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('Counter1.shouldComponentUpdate', this.props, nextProps, this.state, nextState);
        // if (this.state.counter != nextState.counter) {
        //   return false;
        // }
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('Counter1.componentWillUpdate', nextProps, nextState);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('Counter1.componentDidUpdate', prevProps, prevState);
    }

    componentWillUnmount() {
        console.log('Counter1.componentWillUnmount');
    }

    increment() {
      console.log('increment()', this);
      this.setState({
        counter: this.state.counter + 1,
      })
    }

    decrement() {
      console.log('decrement()', this)

      var negativeNumbers = this.state.counter - 1;

      if (negativeNumbers < 1) {
        negativeNumbers = 0;
      }

      this.setState({
        counter: negativeNumbers,
      })
    }

    reset() {
      console.log('reset()', this);
      this.setState({
        counter: 0,
      })
    }

    render() {

      const { title } = this.props;
      const { num } = this.props;
      const { counter } = this.state;
      
      return (
        <div>
              <p className="counter-name">
              Counter #1: {counter}
              </p>
            <button onClick={this.decrement}>-</button>
            <button onClick={this.increment}>+</button>
            <button onClick={this.reset}>Reset</button>
       </div>
        );
    }
}

Counter1.propTypes = {
  num: PropTypes.number.isRequired,
};

export default Counter1;