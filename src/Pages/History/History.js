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
  Content, Label, Title
} from 'native-base';

import AppFrame from 'CourierKupesan/src/Components/AppFrame';
import * as Hooks from 'CourierKupesan/src/Config/Helpers/Hooks';
import StyleGlob from 'CourierKupesan/src/GlobalStyle';

const { width, height } = Dimensions.get('window');
const dataList = [
  {
    title:'Chatime, Hokben',
    to:'Yunita',
    cost:'Rp72.700',
    address:'Kelapa Gading Residence, Tower F',
    dateTime:'13 Jun 2021 21.30'
  },
  {
    title:'RM Sederhana',
    to:'Marla',
    cost:'Rp45.000',
    address:'Apt. Seasons City, Tower A',
    dateTime:'12 Jun 2021 11.00'
  }
];

const History = (props) => {
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
            <TouchableOpacity onPress={()=> navigation.navigate('Detail')} style={style.cardView}>
              <Label style={[StyleGlob.title8,{color:'#FD9727'}]}>{item.title}</Label>
              <View style={style.cardBody}>
                <Text style={[StyleGlob.caption1,{color:'rgb(9, 132, 227)'}]}>{item.to}</Text>
                <Text style={StyleGlob.caption1}>{item.cost}</Text>
              </View>
              <Text style={StyleGlob.caption1}>{item.address}</Text>
      
              <View style={{
                marginTop:10
              }}>
                <Text style={StyleGlob.subtitle4}>{item.dateTime}</Text>
              </View>
            </TouchableOpacity>
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
          <Title style={[StyleGlob.title7,{color:'#7D7D7D',marginBottom:20}]}> Riwayat Pengantaran </Title>
        </View>

        <TouchableOpacity 
          style={{
            width:'90%',
            alignSelf:'center',
            flex:0.5
          }}
          onPress={()=>setToggle(true)}
        >
          <Text style={{textAlign:'center'}}> Belum ada riwayat. </Text>
        </TouchableOpacity>
      </View>
    );
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
        <View />
      }
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
                }]}>Riwayat Pengantaran</Title>
    
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
    borderRadius:10,
    backgroundColor:'white', 
    marginTop:15,
    borderColor:'#1EAAF1'
  },
  body:{
    paddingLeft:20,
    paddingRight:20,
    marginTop:20
  },
  cardBody:{
    // padding:5,
    marginTop:10,
    marginBottom:5, 
    flexDirection:'row',
    justifyContent:'space-between',
    // marginLeft:10,
    width:'100%'
  }
});

export default History;
