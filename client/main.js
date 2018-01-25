import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
// import createBrowserHistory from 'history/createBrowserHistory';

import Signup from '../imports/ui/Signup';
import Login from '../imports/ui/Login';
import Link from '../imports/ui/Link';
import NotFound from '../imports/ui/NotFound';

// const history = createBrowserHistory();

const routes = (
  <Router history={browserHistory}>
    {/* <Switch> */}
      <Route path="/" component={Login}/>
      <Route path="/signup" component={Signup}/>
      <Route path="/links" component={Link}/>
      <Route path="*" component={NotFound}/>
     {/* </Switch> */}
  </Router>
);

Meteor.startup(() => {
  ReactDom.render(routes, document.getElementById('app'));
});