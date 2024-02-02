import React, {Fragment, useState } from 'react';
import {
  Dimensions,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

import { 
  Body,
  Card,
  Button,
  Icon,
  CardItem,
  Content, 
  Label, 
  Input,
  Title, 
  Item,
  Form
} from 'native-base';

import AppFrame from 'CourierKupesan/src/Components/AppFrame';
import * as Hooks from 'CourierKupesan/src/Config/Helpers/Hooks';
import StyleGlob from 'CourierKupesan/src/GlobalStyle';

const { width, height } = Dimensions.get('window');

const ChangePassword = (props) => {
  const {navigation} = props;
  const [toggle, setToggle] = useState(false);
  const [showPassword, setShowPassword] = useState(true);
  const [showPassword2, setShowPassword2] = useState(true);
  const [nameIcon, setNameIcon] = useState('ios-eye-off');
  const [nameIcon2, setNameIcon2] = useState('ios-eye-off');

  function seePassword(){
    setShowPassword( showPassword ? false : true);
    setNameIcon( showPassword ? "ios-eye" : "ios-eye-off");
  }

  function seePassword2(){
    setShowPassword2( showPassword2 ? false : true);
    setNameIcon2( showPassword2 ? "ios-eye" : "ios-eye-off");
  }

  return (
    <AppFrame
      headerLeft={
        <Button transparent onPress={()=> navigation.goBack()}>
          <Icon name='arrow-back' style={{color:'black'}}/>
        </Button>
      }
      headerStatus={true}
      headerRight={
        <Button transparent onPress={()=> navigation.goBack()}>
          <Icon name='close-outline' style={{color:'black'}}/>
        </Button>
      }
      renderContent={
        <Content
          scrollEnabled={false}
          showsVerticalScrollIndicator={false}
        >
          <View style={style.body}>
            <Title style={[StyleGlob.title7,{color:'#FD9727',marginBottom:20}]}>Ganti Kata Sandi</Title>
          </View>

          <Form style={{
            marginTop:10,
            paddingLeft:10,
            paddingRight:10
          }}>
            <Item>
              <Input 
                placeholder="Kata sandi saat ini" 
                secureTextEntry={showPassword}
              />
              <View style={{position:"absolute", right:0}}>
                <Icon 
                  style={{color:'#1A4566'}} 
                  name={nameIcon}
                  onPress={() => seePassword()}
                />
              </View>
            </Item>
            <Item style={{marginTop:20}}>
              <Input 
                placeholder="Kata sandi baru" 
                secureTextEntry={showPassword2}
              />
              <View style={{position:"absolute", right:0}}>
                <Icon 
                  style={{color:'#1A4566'}} 
                  name={nameIcon2} 
                  onPress={() => seePassword2()}
                />
              </View>
            </Item>
            <Item style={{marginTop:15}}>
              <Input 
                placeholder="Ulangi kata sandi baru" 
                secureTextEntry={showPassword2}
              />
              <View style={{position:"absolute", right:0}}>
                <Icon 
                  style={{color:'#1A4566'}} 
                  name={nameIcon2} 
                  onPress={() => seePassword2()}
                />
              </View>
            </Item>
            <View style={style.viewButton}>
              <TouchableOpacity
                activeOpacity={0.5}
                style={style.button}
                onPress={() => onLogin()}
              >
                <Text   
                  allowFontScaling={false}
                  style={[StyleGlob.button3,{
                    color: 'white'
                  }]}
                >SIMPAN</Text>
              </TouchableOpacity>
            </View>
          </Form>

        </Content>
      }
    />
  );
}

const style =  StyleSheet.create({
  body:{
    paddingLeft:20,
    paddingRight:20,
    marginTop:20
  },
  viewButton:{
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginTop:50,
    backgroundColor:'#FFF'
  },
  button:{
    marginBottom: 15,
    marginTop: 10,
    width: 100,
    backgroundColor: '#1EAAF1',
    // borderRadius: 6,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default ChangePassword;
