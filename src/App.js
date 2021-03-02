import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import Course from './containers/Course/Course';

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
            <Route path="/users" component={Users}></Route>
            <Route path="/courses" component={Courses}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
