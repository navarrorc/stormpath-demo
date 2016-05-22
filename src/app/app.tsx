require('../sass/styles.scss');
declare var Firebase:any; // added so we can work with Firebase w/o typescript complaining


import * as React from 'react';
import {render} from 'react-dom';
import {IndexRoute, Route, browserHistory} from 'react-router';
import {createHashHistory} from 'history';

// Not using an ES6 transpiler, because I don't have a react-stormpath.d.ts file.
var ReactStormpath = require( 'react-stormpath');
var Router = require('react-stormpath').Router;
var AuthenticatedRoute = require('react-stormpath').AuthenticatedRoute;
var LoginRoute = require('react-stormpath').LoginRoute;
var HomeRoute = require('react-stormpath').HomeRoute;
//------------------------------------

import { MasterPage, IndexPage, LoginPage, RegistrationPage, ResetPasswordPage, ProfilePage } from './pages';

ReactStormpath.init();
render(
  <Router history={browserHistory}>
    <HomeRoute path="/" component={MasterPage}>
      <IndexRoute component={IndexPage} />
      <LoginRoute path='/login' component={LoginPage} />
      <Route path='/register' component={RegistrationPage} />
      <Route path='/forgot' component={ResetPasswordPage} />
      <AuthenticatedRoute>
        <HomeRoute path='/profile' component={ProfilePage} />
      </AuthenticatedRoute>
    </HomeRoute>
  </Router>,
  document.getElementById('app-container')
);
