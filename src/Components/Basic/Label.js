import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';

class Label extends Component {
  render() {
    return <Text ref={c => (this._root = c)} {...this.props} />;
  }
}

Label.propTypes = {
  ...Text.propTypes,
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
    PropTypes.array
  ]),
  floatBack: PropTypes.number,
};

export default Label;