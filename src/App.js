import React, { Component } from 'react';
import './App.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './Home';
import Header from './Header';
import Counter1 from './Counter1';
import Counter2 from './Counter2';


class App extends Component {

  render() {

    return (
      <BrowserRouter>
        <div className="App">
          <Header/>

          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Counter1" exact component={Counter1} />
            <Route path="/Counter2" exact component={Counter2} />
          </Switch>

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
