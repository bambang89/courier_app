import React, {Fragment, useState } from 'react';
import {
  Dimensions,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  View
} from 'react-native';

import { 
  Icon, 
  Content,
  Header,
  Container,
  Switch,
  Left,
  Form,
  Item,
  Input,
  Label,
  Title,
  Button
} from 'native-base';

import AppFrame from 'CourierKupesan/src/Components/AppFrame';
import * as Hooks from 'CourierKupesan/src/Config/Helpers/Hooks';
import StyleGlob from 'CourierKupesan/src/GlobalStyle';

const { width, height } = Dimensions.get('window');

const Login = (props) => {
  const {navigation} = props;
  const [showPassword, setShowPassword] = useState(true);
  const [nameIcon, setNameIcon] = useState('ios-eye-off');
  const [password, setPassword] = useState('');
  const [nomor, setNomor] = useState('');

  function seePassword(){
    setShowPassword( showPassword ? false : true);
    setNameIcon( showPassword ? "ios-eye" : "ios-eye-off");
  }

  function onLogin(){
    Alert.alert(
      '',
      'Nomor ponsel tidak ditemukan atau kata sandi kamu salah',
      [{
        text: 'Coba lagi', onPress: () => {
          navigation.navigate('Home');
        }
      }]
    );
  }

  return (
    <AppFrame
      renderContent={
        <Content
          scrollEnabled={false}
          showsVerticalScrollIndicator={false}
        >
          <View style={{ 
            alignItems:'center',
            paddingTop: width * (Hooks.screenRatio < 2 ? 0.25 : 0.35)
          }}>
            <Title style={[StyleGlob.title3,{color:'black'}]}>Masuk</Title>
          </View>
          <Form style={style.form}>
            <View style={{
              width:'100%',
              flexDirection:'row',
              alignItems:'flex-end',
            }}>
              <Label style={{width:'30%'}}>No.ponsel: </Label>
              <Item style={{width:'70%'}}>
                <Input 
                  keyboardType='phone-pad'
                />
              </Item>
            </View>
            <View style={{
              width:'100%',
              marginTop:20,
              flexDirection:'row',
              alignItems:'flex-end',
            }}>
              <Label style={{width:'30%'}}>Kata Sandi: </Label>
              <Item style={{width:'70%'}}>
                <Input
                  onChangeText={(password) => setPassword(password)}
                  value={password}
                  secureTextEntry={showPassword} 
                />
              </Item>
              <View style={{position:"absolute", right:0}}>
                <Icon 
                  style={{color:'#1A4566'}} 
                  name={nameIcon} 
                  onPress={() => seePassword()}
                />
              </View>

            </View>

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
                > Masuk </Text>
              </TouchableOpacity>
            </View>
          </Form>
          <View style={{padding:15, marginTop:10}}>
            <Text style={StyleGlob.caption1}>Belum terdaftar sebagai mitra pengantar?</Text>
            <Text style={[StyleGlob.button3,{
              color:'rgb(9, 132, 227)', 
              borderBottomColor:'rgb(9, 132, 227)',
              textDecorationLine: 'underline',
              marginTop:5
            }]}>Daftar di sini</Text>
          </View>
        </Content>
      }
    />
  );
}

const style =  StyleSheet.create({
  form:{
    marginTop:30,
    paddingLeft:30,
    paddingRight:30
  },
  itemBorder:{
    borderBottomWidth: 0, 
    paddingBottom:20
  },
  viewButton:{
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginTop:20,
    backgroundColor:'#FFF'
  },
  button:{
    marginBottom: 15,
    marginTop: 10,
    width: 100,
    backgroundColor: '#FD9727',
    borderRadius: 6,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center'
  }
})


export default Login;
