import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import { ViewPropTypes } from './Utils';

class Container extends Component {
  render() {
    return (
      <View ref={c => (this._root = c)} {...this.props}>
        {this.props.children}
      </View>
    );
  }
}

Container.propTypes = {
  ...ViewPropTypes,
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
    PropTypes.array
  ])
};

export default Container;