import React, {Fragment, useState } from 'react';
import {
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  Linking,
  Text,
  View
} from 'react-native';

import { 
  Button,
  Content,
  Icon,
  Title
} from 'native-base';

import AppFrame from 'CourierKupesan/src/Components/AppFrame';
import * as Hooks from 'CourierKupesan/src/Config/Helpers/Hooks';
import StyleGlob from 'CourierKupesan/src/GlobalStyle';

const { width, height } = Dimensions.get('window');

const Other = (props) => {
  const {navigation} = props;
  const [toggle, setToggle] = useState(false);
  const [status, setStatus] = useState('ISTIRAHAT');

  return (
    <AppFrame
      headerLeft={
        <Button transparent onPress={()=> navigation.goBack()}>
          <Icon name='arrow-back' style={{color:'black'}}/>
        </Button>
      }
      headerStatus={true}
      headerRight={
        <View />
      }
      renderContent={
        <Content
          scrollEnabled={false}
          showsVerticalScrollIndicator={false}
        >
          <View style={{paddingLeft:20, paddingRight:20}}>
            <Title style={[StyleGlob.title9,{color:'black'}]}>Melani</Title>
            <Text style={StyleGlob.caption2}>0888-1234-5678 </Text>
            <Text style={StyleGlob.caption2}>Terdaftar 26 Jun 2021 15:23</Text>
          </View>
          <View style={style.lineBottom}/>
          <View style={{paddingLeft:20, paddingRight:20}}>
            <TouchableOpacity 
              style={style.itemList}
              onPress={()=> navigation.navigate('History')}
            >
              <Icon name="time-outline" style={{color:'#1EAAF1', width:'10%'}}/>
              <Text style={[StyleGlob.caption1]}>Riwayat Pengantaran</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={style.itemList}
              onPress={()=> navigation.navigate('ChangePassword')}
            >
              <Icon name="key-outline" style={{color:'#1EAAF1', width:'10%'}}/>
              <Text style={[StyleGlob.caption1]}>Ganti Kata Sandi</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={style.itemList}
              onPress={()=> Linking.openURL('https://api.whatsapp.com/send?')}
            >
              <Icon name="help-circle-outline" style={{color:'#1EAAF1', width:'10%'}}/>
              <Text style={[StyleGlob.caption1]}>Bantuan</Text>
            </TouchableOpacity>
          </View>
          <View style={style.lineBottom}/>
          <View style={{paddingLeft:20, paddingRight:20}}>
            <TouchableOpacity 
              style={style.itemList}
              onPress={()=> navigation.navigate('Login')}
            >
              <Icon name="exit-outline" style={{color:'#1EAAF1', width:'10%'}}/>
              <Text style={[StyleGlob.caption1]}>Keluar</Text>
            </TouchableOpacity>
          </View>
        </Content>
      }
    />
  );
}

const style =  StyleSheet.create({
  itemList:{
    flexDirection:'row',
    alignItems:'center',
    width:'100%',
    marginTop:15,
  },
  lineBottom:{
    width, height:2, 
    marginTop:15,
    backgroundColor:'#FD9727'
  }
});


export default Other;
