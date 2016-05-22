import * as React from 'react';
var DocumentTitle = require('react-document-title');
var UserProfileForm = require('react-stormpath').UserProfileForm;


export class ProfilePage extends React.Component<any,any> {  
  render() {
    return (
      <DocumentTitle title={`My Profile`}>
      <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <h3>My Profile</h3>
              <hr />
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12">
              <UserProfileForm />
            </div>
          </div>
        </div>
      </DocumentTitle>
    );
  }
}