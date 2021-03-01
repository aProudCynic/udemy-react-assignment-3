import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div>
          <nav>
            <Link to={{pathname: '/users'}}>Users</Link> | <Link to={{pathname: '/courses'}}>Courses</Link>
          </nav>
          <Switch>
            <Route path="/users"><Users/></Route>
            <Route path="/courses"><Courses/></Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
