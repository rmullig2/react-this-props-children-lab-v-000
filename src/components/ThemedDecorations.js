import React from 'react';
import PropTypes from 'prop-types';

export default class ThemedDecorations extends React.Component {
  render() {
    const addClass = React.Children.map(this.props.children, child => {
      return (
        <div className="theme">{child}</div>
      );
    })
  
    return (
      <div className="themed-decorations">
        {addClass}
      </div>
    )
  }
}