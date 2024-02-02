import React, {Fragment, useState, useCallback, useEffect } from 'react';
import {
  Dimensions,
  Platform,
  Text,
  View
} from 'react-native';

import { 
  Body,
  Card,
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

import { 
  GiftedChat, 
  Actions, 
  InputToolbar, 
  Bubble, 
  SystemMessage, 
  Send 
} from 'react-native-gifted-chat';

const { width, height } = Dimensions.get('window');

const Chat = (props) => {
  const {navigation} = props;
  const [messages, setMessages] = useState([]);
  const [typingTexts, setTypingTexts] = useState(null);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date()
      },
    ])
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, []);

  function renderMessage() {
    let messageTextStyle = {
      fontSize: 28,
      // Emoji get clipped if lineHeight isn't increased; make it consistent across platforms.
      lineHeight: Platform.OS === 'android' ? 34 : 30,
    };
  }

  const renderFooter = ()=> {
    if(typingTexts){
      return(
        <View style={{
          marginTop: 5,
          marginLeft: 10,
          marginRight: 10,
          marginBottom: 10    
        }}>
          <Text style={{
            fontSize: 14,
            color: '#aaa'      
          }}>
            {typingTexts}
          </Text>
        </View>
      );
    }
    return null;
  }

  const renderSystemMessage = (props) =>{
    return(
      <SystemMessage
        {...props}
        containerStyle={{
          marginBottom: 15,
        }}
        textStyle={{
          fontSize: 14
        }}
      />
    );
  }

  const renderUploadActions = (props) => {
    return (
      <UploadActions {...props} />
    );
  }

  const renderBubble = (props) =>{
    return(
      <Bubble
        {...props}
        wrapperStyle={{
          right: { backgroundColor: 'grey' },
          left: {
            backgroundColor: '#f0f0f0'
          }
        }}
        textStyle={{ right: { color: '#fff' } }}
      />
    );
  }

  const renderSend = (props) => {
    return(
      <Send {...props}>
        <View style={{marginBottom:10, marginRight:10}}>
          <Icon name="send" color="#1EAAF1"/>
        </View>
      </Send>

    );
  }

  const customtInputToolbar = (props) => {
    return (
      <InputToolbar
        {...props}
        containerStyle={{borderTopWidth: 0}}
      />
    );
  };

  return (
    <Container>
      <Header
        transparent
        noShadow={true}
        style={{backgroundColor:'transparent'}}
      >
        <Left>
          <View style={{width:'100%', alignItems:'center', flexDirection:'row'}}>
            <Button transparent style={{marginRight:20}} onPress={()=> navigation.goBack()}>
              <Icon name='arrow-back' style={{color:'#1EAAF1'}}/>
            </Button>

            <Title style={{color:'#FD9727'}}>
              Marla
            </Title>
          </View>
        </Left>
        <Body/>
      </Header>

      <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{
          _id: 1,
        }}
        isTyping= {true}
        alwaysShowSend={true}
        showAvatarForEveryMessage={false}
        showUserAvatar={false}
        renderAvatarOnTo={false}
        alignTop={true}
        placeholder="Tulis pesan di sini"
        renderAvatar={null}
        // renderFooter={renderFooter}
        // renderSystemMessage={renderSystemMessage}
        // renderActions={renderUploadActions}
        // renderBubble={renderBubble}
        renderSend={renderSend}
        renderInputToolbar={customtInputToolbar}
        textInputStyle={{
          paddingLeft:10,
          paddingRight:10,
          marginLeft: 15,
          marginRight: 15,
          borderWidth: 0.5,
          borderColor: 'grey',
          borderRadius: 25
        }}
        //renderMessage={renderMessage()}
        // messages={this.state.messages}
        // onSend={this.onSend}
        // loadEarlier={this.state.loadEarlier}
        // onLoadEarlier={this.onLoadEarlier}
        // isLoadingEarlier={this.state.isLoadingEarlier}
        // renderActions={this.renderUploadActions}
        // // renderCustomView={this.renderCustomView}
        // renderBubble={this.renderBubble}
        // renderSystemMessage={this.renderSystemMessage}
      />
    </Container>
  );
}

export default Chat;
