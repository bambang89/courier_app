import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, ViewPropTypes } from 'react-native';

class Left extends Component {
  render() {
    return <View ref={c => (this._root = c)} {...this.props} />;
  }
}

Left.propTypes = {
  ...ViewPropTypes,
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
    PropTypes.array
  ])
};

export default Left;