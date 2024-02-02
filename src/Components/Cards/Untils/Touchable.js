import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  TouchableOpacity,
  TouchableNativeFeedback,
  ViewPropTypes,
} from 'react-native';
import * as Hooks from 'CourierKupesan/src/Config/Helpers/Hooks';

const Touchable = ({ onPress, style, children }) => {
  if (Hooks.IS_ANDROID && !Hooks.IS_LT_LOLLIPOP) {
    return (
      <TouchableNativeFeedback
        background={TouchableNativeFeedback.SelectableBackground()}
        onPress={onPress}
      >
        <View
          style={style}
        >
          {children}
        </View>
      </TouchableNativeFeedback>
    );
  }
  else {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={style}
      >
        {children}
      </TouchableOpacity>
    );
  }
};

Touchable.propTypes = {
  onPress: PropTypes.func.isRequired,
  style: ViewPropTypes.style,
  children: PropTypes.node.isRequired,
};

Touchable.defaultProps = {
  onPress: Hooks.noop,
  style: {}
};

export default Touchable;