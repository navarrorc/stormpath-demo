import * as React from 'react';
var DocumentTitle = require('react-document-title');
var LoginForm = require('react-stormpath').LoginForm;


export class LoginPage extends React.Component<any,any> {
  render() {
    return (
      <DocumentTitle title={`Login`}>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <h3>Login</h3>
              <hr />
            </div>
          </div>
          <LoginForm />
        </div>
      </DocumentTitle>
    );
  }
}