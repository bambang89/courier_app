import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, ViewPropTypes } from 'react-native';

class Body extends Component {
  render() {
    return <View ref={c => (this._root = c)} {...this.props} />;
  }
}

Body.propTypes = {
  ...ViewPropTypes,
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
    PropTypes.array
  ])
};

export default Body;