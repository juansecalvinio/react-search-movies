import React, { Component } from 'react';
import { Switch, Router } from 'react-router-dom';
import { Home } from './pages/Home';
import { Detail } from './pages/Detail';

import './App.css';
import 'bulma/css/bulma.css';


class App extends Component {
  render() {
    return (
      <div className="App">
          <Switch>
            <Router exact path='/' component={Home} />
            <Router path='/detail/:id' component={Detail} />
          </Switch>
      </div>
    );
  }
}

export default App;
