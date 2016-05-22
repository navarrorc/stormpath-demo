import { Link } from 'react-router';
import * as React from 'react';
var PropTypes = require('react').PropTypes;
var LoginLink = require('react-stormpath').LoginLink;



export class IndexPage extends React.Component<any,any> {
  render() {
    return (
      <div className="container">
        <h2 className="text-center">Welcome!</h2>
        <hr />
        <div className="jumbotron">
          <p>
            <strong>This is the example fullstack project for React, ReactRouter, Flux, Express, and Stormpath</strong>
          </p>
          <p>Ready to begin? Try these Stormpath features that are included in this example:</p>
          <ol className="lead">
            <li><Link to="/register">Registration</Link></li>
            <li><LoginLink /></li>
            <li><Link to="/forgot">Forgot Password</Link></li>
            <li><Link to="/profile">Custom Profile Data</Link></li>
          </ol>
        </div>
      </div>
    );
  }
}