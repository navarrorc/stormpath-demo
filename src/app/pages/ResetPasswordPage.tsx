import * as React from 'react';
var DocumentTitle = require('react-document-title');
var ResetPasswordForm = require('react-stormpath').ResetPasswordForm;

export class ResetPasswordPage extends React.Component<any,any> {
  render() {
    return (
      <DocumentTitle title={`Login`}>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <h3>Forgot Password</h3>
              <hr />
            </div>
          </div>
          <ResetPasswordForm />
        </div>
      </DocumentTitle>
    );
  }
}