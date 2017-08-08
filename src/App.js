import React, { Component } from 'react';
import './App.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './Home';
import Header from './Header';
import Form from "./Form";
import Counter from './Counter';
//import Lifecycle from "./Lifecycle";
import CounterForm from './CounterForm';

const CounterPage = (num) => (
  <Counter num={num} />
);

const FormWrapper = () => (
  <Form initialValue="43" />
)

class App extends Component {

  render() {

    return (
      <BrowserRouter>
        <div className="App">
          <Header/>

          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/form" component={FormWrapper} />
            <Route path="/Counter1" component={() => CounterPage(1)} />
            <Route path="/Counter2" component={() => CounterPage(2)}  />
            <Route path="/CounterForm" component={CounterForm} />
          </Switch>

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
