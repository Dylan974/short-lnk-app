import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
// import createBrowserHistory from 'history/createBrowserHistory';

import Signup from '../ui/Signup';
import Login from '../ui/Login';
import Link from '../ui/Link';
import NotFound from '../ui/NotFound';

// const history = createBrowserHistory();

const unauthenticatedPages = ['/', '/signup'];
const authenticatedPages = ['/links'];
const onEnterPublicPage = () => {
  if(Meteor.userId()) {
    browserHistory.replace('/links');
  }
};
const onEnterPrivatePage = () => {
  if(!Meteor.userId()){
    browserHistory.replace('/');
  }
};

export const onAuthChange = (isAuthenticated) => {
    const pathname = browserHistory.getCurrentLocation().pathname;
    const isUnauthenticatedPage = unauthenticatedPages.includes(pathname);
    const isAuthenticatedPage = authenticatedPages.includes(pathname);
    
    if(isUnauthenticatedPage && isAuthenticated){
      browserHistory.replace('/links');
    }
    else if(isAuthenticatedPage && !isAuthenticated){
      browserHistory.replace('/');
    }
};

export const routes = (
  <Router history={browserHistory}>
    {/* <Switch> */}
      <Route path="/" component={Login} onEnter={onEnterPublicPage}/>
      <Route path="/signup" component={Signup} onEnter={onEnterPublicPage}/>
      <Route path="/links" component={Link} onEnter={onEnterPrivatePage}/>
      <Route path="*" component={NotFound}/>
     {/* </Switch> */}
  </Router>
);