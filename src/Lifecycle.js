import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Counter from './Counter';
import CounterChild from './CounterChild';

class Lifecycle extends Component
{
    constructor(props) {
        super(props);

        console.log('Lifecycle.constructor');
    }

    componentWillMount() {
        console.log('Lifecycle.componentWillMount');
    }

    componentDidMount() {
        console.log('Lifecycle.componentDidMount');
    }

    componentWillReceiveProps(nextProps) {
        console.log('Lifecycle.componentWillReceiveProps', nextProps);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('Lifecycle.shouldComponentUpdate', nextProps, nextState);
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('Lifecycle.componentWillUpdate', nextProps, nextState);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('Lifecycle.componentDidUpdate', prevProps, prevState);
    }

    componentWillUnmount() {
        console.log('Lifecycle.componentWillUnmount');
    }

  	render() {
        console.log('Lifecycle.render');

  		return (
	    	<div className="">
	         <h2>{ this.props.title }</h2>
             <hr/>
             <Counter num={5} />
             <hr/>
             <CounterChild />
	        </div>
        );

    }
}

Lifecycle.propTypes = {
    title: PropTypes.string.isRequired,
};

Lifecycle.defaultProps = {
    title: 'My Component Title',
};


export default Lifecycle;