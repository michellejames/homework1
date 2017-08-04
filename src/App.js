import React, { Component } from 'react';
import './App.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './Home';
import Header from './Header';
import Counter1 from './Counter1';
import Counter2 from './Counter2';
import CounterForm from './CounterForm';

class App extends Component {

  render() {

    return (
      <BrowserRouter>
        <div className="App">
          <Header/>

          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Counter1" component={Counter1} />
            <Route path="/Counter2" component={Counter2} />
            <Route path="/CounterForm" component={CounterForm} />
          </Switch>

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
