import * as React from 'react';
import { Link } from 'react-router';

var LoginLink = require('react-stormpath').LoginLink;
var LogoutLink = require('react-stormpath').LogoutLink;
var Authenticated = require('react-stormpath').Authenticated;
var NotAuthenticated = require('react-stormpath').NotAuthenticated;


export default class Header extends React.Component<any,any> {
  render() {
    return (
      <nav className="navbar navbar-default navbar-static-top">
        <div className="container">
          <div id="navbar-collapse" className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <NotAuthenticated>
                <li>
                  <LoginLink />
                </li>
              </NotAuthenticated>
              <li><Link to="/">Home</Link></li>
              <Authenticated>
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
              </Authenticated>
              <NotAuthenticated>
                <li>
                  <Link to="/register">Create Account</Link>
                </li>
              </NotAuthenticated>
              <Authenticated>
                <li>
                  <LogoutLink />
                </li>
              </Authenticated>
            </ul>
            <ul className="nav navbar-nav navbar-right">
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
