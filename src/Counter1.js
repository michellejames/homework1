import React, { Component } from 'react';
import './Counter.css';


class Counter1 extends Component
{
    constructor(props) {
      super(props);

      this.increment = this.increment.bind(this);
      this.decrement = this.decrement.bind(this);
      this.reset = this.reset.bind(this);

      this.state = {
        counter: 0,
      };
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
        counter: this.state.counter = 0,
      })
    }

    render() {

      const { title } = this.props;
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


export default Counter1;