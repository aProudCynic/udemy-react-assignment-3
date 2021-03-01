import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/users"><Users/></Route>
          <Route path="/courses"><Courses/></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
