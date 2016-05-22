import * as React from 'react';
var DocumentTitle = require('react-document-title');
var RegistrationForm = require('react-stormpath').RegistrationForm;


export class RegistrationPage extends React.Component<any,any> {
  render() {
    return (
      <DocumentTitle title={`Registration`}>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <h3>Registration</h3>
              <hr />
            </div>
          </div>
          <RegistrationForm />
        </div>
      </DocumentTitle>
    );
  }
}