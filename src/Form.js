import React, { Component } from 'react';
import PropTypes from 'prop-types';

const KEY = 'greg-key3';

class Form extends Component
{
    constructor(props) {
        super(props);

        this.updateText = this.updateText.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        console.log('Form.constructor');
        this.state = {
            value: '',
        };
    }

    componentWillMount() {
        console.log('Form.componentWillMount');
    }

    componentDidMount() {
        console.log('Form.componentDidMount');

        this.getData(KEY);
    }

    componentWillReceiveProps(nextProps) {
        console.log('Form.componentWillReceiveProps', nextProps);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('Form.shouldComponentUpdate', nextProps, nextState);
        return true;
    }

    // componentWillUpdate(nextProps, nextState) {
    //     console.log('Form.componentWillUpdate', nextProps, nextState);
    // }

    // componentDidUpdate(prevProps, prevState) {
    //     console.log('Form.componentDidUpdate', prevProps, prevState);
    // }

    componentWillUnmount() {
        console.log('Form.componentWillUnmount');
    }

    updateText(event) {
        const val = event.target.value;
        console.log('Form.updateText', val);
        this.setState({value: val});
    }

    handleSubmit(event) {
        console.log('Form.handleSubmit', event);
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
            if (response.status == 200) {
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
        console.log('Form.render');

  		return (
	    	<div className="">
	         <h2>{ this.props.title }</h2>
             <hr/>
             <input type="text" onChange={this.updateText} value={this.state.value} />
             <button onClick={this.handleSubmit}>Send</button>
             </div>
        );

    }
}

Form.propTypes = {
    title: PropTypes.string.isRequired,
    initialValue: PropTypes.string.isRequired,
};

Form.defaultProps = {
    title: 'My Component Title 2',
};


export default Form;