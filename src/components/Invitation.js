import React from 'react';
import PropTypes from 'prop-types';

export default class Invitation extends React.Component {
  render() {
    return (
      <div className="invitation">
        <h1>You've been invited!</h1>
        <h3>{this.props.children}</h3>
      </div>
    )
  }
}