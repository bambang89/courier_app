import React, {Fragment, useState, useCallback, useEffect } from 'react';
import {
  Dimensions,
  Platform,
  View
} from 'react-native';

import { 
  Body,
  Card,
  Text,
  Button,
  Icon,
  CardItem,
  Content, 
  Label, 
  Title, 
  Container, 
  Header,
  Left
} from 'native-base';

import AppFrame from 'CourierKupesan/src/Components/AppFrame';
import * as Hooks from 'CourierKupesan/src/Config/Helpers/Hooks';

import { Avatar, Day, utils} from 'react-native-gifted-chat';

const { isSameUser, isSameDay } = utils;
const { width, height } = Dimensions.get('window');

const SlackMessage = (props) => {

  const { containerStyle, ...props } = this.props

  return (
    <View>
      <View
        style={[
          styles.container,
          { marginBottom },
          this.props.containerStyle,
        ]}
      >
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    marginLeft: 8,
    marginRight: 0,
  },
  slackAvatar: {
    // The bottom should roughly line up with the first line of message text.
    height: 40,
    width: 40,
    borderRadius: 3,
  },
})

Message.defaultProps = {
  renderAvatar: undefined,
  renderBubble: null,
  renderDay: null,
  currentMessage: {},
  nextMessage: {},
  previousMessage: {},
  user: {},
  containerStyle: {},
}

Message.propTypes = {
  renderAvatar: PropTypes.func,
  renderBubble: PropTypes.func,
  renderDay: PropTypes.func,
  currentMessage: PropTypes.object,
  nextMessage: PropTypes.object,
  previousMessage: PropTypes.object,
  user: PropTypes.object,
  containerStyle: PropTypes.shape({
    left: ViewPropTypes.style,
    right: ViewPropTypes.style,
  }),
}

export default SlackMessage;
