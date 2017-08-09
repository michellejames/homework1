import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Counter.css';

class Counter extends Component {
    constructor(props) {
      super(props);

      this.increment = this.increment.bind(this);
      this.decrement = this.decrement.bind(this);
      this.reset = this.reset.bind(this);

      let startingVal = props.initialValue;
      if (!startingVal) {
        startingVal = 0;
      }
      this.state = {
        counter: startingVal,
      };
    }

    // componentWillMount() {
    //     console.log('Counter.componentWillMount');
    // }

    // componentDidMount() {
    //     console.log('Counter.componentDidMount');
    // }

    componentWillReceiveProps(nextProps) {
        console.log('Counter.componentWillReceiveProps', nextProps);

        let startingVal = nextProps.initialValue;
        if (!startingVal) {
          startingVal = 0;
        }
        this.setState({
          counter: startingVal,
        });
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('Counter.shouldComponentUpdate', this.props, nextProps, this.state, nextState);
        return true;
    }

    // componentWillUpdate(nextProps, nextState) {
    //     console.log('Counter.componentWillUpdate', nextProps, nextState);
    // }

    // componentDidUpdate(prevProps, prevState) {
    //     console.log('Counter.componentDidUpdate', prevProps, prevState);
    // }

    // componentWillUnmount() {
    //     console.log('Counter.componentWillUnmount');
    // }

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
      console.log(this.props);
      const { initialValue } = this.props;
      const { counter } = this.state;
      
      return (
        <div>
              <p className="counter-name">
              {title}: {counter}
              </p>
            <button onClick={this.decrement}>-</button>
            <button onClick={this.increment}>+</button>
            <button onClick={this.reset}>Reset</button>
       </div>
        );
    }
}

Counter.propTypes = {
  title: PropTypes.string.isRequired,
};

Counter.defaultProps = {
  title: 'My Counter',
  initialValue: 0,
};

export default Counter;