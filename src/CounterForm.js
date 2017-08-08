import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Counter from "./Counter";

const KEY = 'greg-key3';

class CounterForm extends Component
{
    constructor(props) {
        super(props);

        this.updateText = this.updateText.bind(this);
        this.updateValue = this.updateValue.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        console.log('CounterForm.constructor');
        this.state = {
            value: '',
            name: ''
        };
    }

    componentWillMount() {
        console.log('CounterForm.componentWillMount');
    }

    componentDidMount() {
        console.log('CounterForm.componentDidMount');

        this.getData(KEY);
    }

    componentWillReceiveProps(nextProps) {
        console.log('CounterForm.componentWillReceiveProps', nextProps);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('CounterForm.shouldComponentUpdate', nextProps, nextState);
        return true;
    }

    // componentWillUpdate(nextProps, nextState) {
    //     console.log('Form.componentWillUpdate', nextProps, nextState);
    // }

    // componentDidUpdate(prevProps, prevState) {
    //     console.log('Form.componentDidUpdate', prevProps, prevState);
    // }

    componentWillUnmount() {
        console.log('CounterForm.componentWillUnmount');
    }

    updateText(event) {

        const nameUpdate = event.target.name;

        console.log('CounterForm.updateText', nameUpdate);
        this.setState({name: nameUpdate});
    }

    updateValue(event) {
        const valueUpdate = event.target.value;
        console.log('CounterForm.updateValue', valueUpdate);
        this.setState({value: valueUpdate});
    }

    handleSubmit(event) {
        console.log('CounterForm.handleSubmit', event);
        this.saveData(KEY, this.state.value);
    }

    getData(key) {
        console.log('fetching data...', key);
        fetch('http://circuslabs.net:3000/data/' + key, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then( response => {
            if (response.status === 200) {
                return response.text();
            }
            if (this.props.initialValue) {
                return this.props.initialValue;
            }
            return '';
        }) 
        .then( data => {
            console.log('here is the response data!', data);
            this.setState({value: data});
        })
        .catch(function(err) {
            console.log('error!', err);
        }); 
    }

    saveData(key, value) {
        console.log('saving data...', key, value);
        let jsonData = {
            type: 'string',
            content: value,
        };
        fetch('http://circuslabs.net:3000/data/' + key, {
            method: 'POST',
            body: JSON.stringify(jsonData),
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then( response => response.text() ) 
        .then( data => {
            console.log('here is the response data!', data);
        })
        .catch(function(err) {
            console.log('error!', err);
        });
    }

  	render() {
        console.log('CounterForm.render');

  		return (
	    	<div className="">
		        <h2>Counter Form</h2>
	            <hr/>

		    	<form>
		    		<label>Name the counter: </label>
		    		<input type="text" onChange={this.updateText} name={this.state.name} />
		    		<br />
		    		<br />
		    		<label>Initial value for the counter: </label>
		    		<input type="text" onChange={this.updateValue} value={this.state.value} />
		    		<br />
		    		<br />
	             	<button onClick={this.handleSubmit}>Send</button>
		    		<hr />
	            </form>
	            <Counter title={this.state.name} initialValue={this.state.value} />
            </div>
        );

    }
}

// CounterForm.propTypes = {
//     title: PropTypes.string.isRequired,
//     initialValue: PropTypes.string,
// };

// CounterForm.defaultProps = {
//     title: 'My Component Title',
// };


export default CounterForm;