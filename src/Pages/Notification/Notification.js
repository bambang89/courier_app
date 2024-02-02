import React, {Fragment, useState } from 'react';
import {
  Dimensions,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Text,
  View
} from 'react-native';

import { 
  Body,
  Card,
  CardItem,
  Content, Label, Title
} from 'native-base';

import AppFrame from 'CourierKupesan/src/Components/AppFrame';
import * as Hooks from 'CourierKupesan/src/Config/Helpers/Hooks';
import StyleGlob from 'CourierKupesan/src/GlobalStyle';

const { width, height } = Dimensions.get('window');
const dataList = [
  {
    title:"{{Notification title 3}}",
    body:"{{Notification body 3 Notification body 3 Notification body 3 Notification body 3 }}",
    dateTime:"13 Jun 2021 21.30"
  },
  {
    title:"{{Notification title 2}}",
    body:"{{Notification body 2 Notification body 2 }}",
    dateTime:"13 Jun 2021 14.37"
  },
  {
    title:"{{Notification title 1}}",
    body:"{{Notification body Notification body 1 Notification body 1 Notification body 1}}",
    dateTime:"12 Jun 2021 06.59"
  }
];

const Notification = (props) => {
  const {navigation} = props;
  const [toggle, setToggle] = useState(false);
  const [dataItems, setDataItems] = useState(dataList);

  const renderListItems = () => {
    return(
      <FlatList
        data={dataItems}
        horizontal={false}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => {
          return(
            <View style={style.cardView}>
              <Label style={[StyleGlob.title5,{color:'#FD9727'}]}>{item.title}</Label>
              <View style={style.cardBody}>
                <Text style={StyleGlob.caption1}>{item.body}</Text>
              </View>
      
              <View style={{
                alignItems:'flex-end',
                marginTop:10
              }}>
                <Text style={StyleGlob.subtitle4}>{item.dateTime}</Text>
              </View>
            </View>
          );
        }}
      />
    )
  }

  const renderDefault = ()=>{
    return(
      <View style={{flex:1}}>
        <View style={{ 
          paddingLeft:10,
          marginTop:10,
          flex:0.4,
          paddingRight:10
        }}>
          <Title style={[StyleGlob.title7,{color:'#FD9727',marginBottom:20}]}> Notifikasi </Title>
        </View>

        <TouchableOpacity 
          style={{
            width:'90%',
            alignSelf:'center',
            flex:0.5
          }}
          onPress={()=>setToggle(true)}
        >
          <Text style={{textAlign:'center'}}> Belum ada notifikasi. </Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <AppFrame
      renderContent={
        <>
          {
            toggle?
            <Content
              style={{backgroundColor:'#1EAAF1'}}
              scrollEnabled={false}
              showsVerticalScrollIndicator={false}
            >
              <View style={style.body}>
                <Title style={[StyleGlob.title7,{
                  color:'white'
                }]}>Notifikasi</Title>
    
                {renderListItems()}
              </View>
            </Content>
            :
            renderDefault()
          }
        </>
      }
    />
  );
}

const style =  StyleSheet.create({
  cardView:{
    width:'100%',
    padding:10,
    borderWidth:0.8,
    borderRadius:6,
    backgroundColor:'white', 
    borderColor:'#1EAAF1',
    marginTop:15,
  },
  body:{
    paddingLeft:10,
    paddingRight:10,
    marginTop:10
  },
  cardBody:{
    padding:5,
    // marginTop:5,
    width:'95%'
  }
});

export default Notification;
