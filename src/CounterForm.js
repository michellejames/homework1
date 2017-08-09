import React, { Component } from 'react';
import Counter from "./Counter";

const KEY = "webDevShelly";

class CounterForm extends Component
{
    constructor(props) {
        super(props);

        this.updateName = this.updateName.bind(this);
        this.updateValue = this.updateValue.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            name: "My Counter",
            value: "",
        };
    }

    // componentWillMount() {
    //     console.log('CounterForm.componentWillMount');
    // }

    componentDidMount() {
        console.log('CounterForm.componentDidMount');
        this.getData(KEY);
    }

    // componentWillReceiveProps(nextProps) {
    //     console.log('CounterForm.componentWillReceiveProps', nextProps);
    // }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('CounterForm.shouldComponentUpdate', nextProps, nextState);
        return true;
    }

    // componentWillUpdate(nextProps, nextState) {
    //     console.log('CounterForm.componentWillUpdate', nextProps, nextState);
    // }

    // componentDidUpdate(prevProps, prevState) {
    //     console.log('CounterForm.componentDidUpdate', prevProps, prevState);
    // }

    //componentWillUnmount() {
    //     console.log('CounterForm.componentWillUnmount');
    // }

    updateName(event) {

        const nameUpdate = event.target.name;
        const valueUpdate = event.target.value;

        this.setState({
            [nameUpdate]: valueUpdate,
        });
    }

    updateValue(event) {
        const nameUpdate = event.target.name;
        const valueUpdate = parseInt(event.target.value);

        this.setState({
            [nameUpdate]: valueUpdate,
        });
    }

    handleSubmit(event) {
        console.log('CounterForm.handleSubmit', event);
        this.saveData(KEY + "-name", this.state.name);
        this.saveData(KEY + "-value", this.state.value.toString());
    }

    getData(key) {
        console.log('fetching data...', key);
        fetch('http://circuslabs.net:3000/data/' + KEY, {
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

        return (
            <div className="">
                <h2>Counter Form</h2>
                <hr/>

                <form>
                    <label>Name the counter: </label>
                    <input type="text" onChange={this.updateName} name="name" value={this.state.name} />
                    <br />
                    <br />
                    <label>Initial value for the counter: </label>
                    <input type="num" onChange={this.updateValue} name="value" value={this.state.value} />
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


export default CounterForm;