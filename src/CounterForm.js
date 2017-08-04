import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './App.css';

import { Link } from 'react-router-dom';

import Counter1 from './Counter1';
import Counter2 from './Counter2';

class CounterForm extends Component
{

	constructor(props) {
	    super(props);

	    console.log('CounterForm.constructor');

	    this.state = {
	      counter: 0
	    };
	}

  	render() {
  		// const { num } = this.props;
  		// const { counter } = this.state;
  		
  		return (
	    	<div className="">
	          <form>
	          	
	          	<input type="text" placeholder="Name" />
	          	<input type="text" placeholder="Initial Value" />
	          	<button type="submit">Submit</button>
	          </form>
	          <Counter1 />
	          <Counter2 />
	      	</div>
      );

    }
}

CounterForm.propTypes = {
    title: PropTypes.string.isRequired,
};

CounterForm.defaultProps = {
    title: 'My Component Title',
};


export default CounterForm;