import * as React from 'react';
import { Link } from 'react-router';
var LoginLink = require('react-stormpath').LoginLink;
var DocumentTitle = require('react-document-title');

import Header from './Header';

export class MasterPage extends React.Component<any,any> {
  render() {
    return (
      <DocumentTitle title='My React App'>
        <div className='MasterPage'>
          <Header />
          { this.props.children }
        </div>
      </DocumentTitle>
    );
  }
}