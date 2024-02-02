import React, {Fragment, useState } from 'react';
import {
  Dimensions,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  View
} from 'react-native';

import { 
  Content, 
  Title,
  Text
} from 'native-base';

import AppFrame from 'CourierKupesan/src/Components/AppFrame';
import * as Hooks from 'CourierKupesan/src/Config/Helpers/Hooks';
import StyleGlob from 'CourierKupesan/src/GlobalStyle';

const { width, height } = Dimensions.get('window');
const redColor = '#E2202C';
const greenColor = '#35B736';

const dataList = [
  {
    saldo   : 'Rp69.500',
    info    : 'Penarikan tunai.',
    detail  : '',
    dateTime: 'Minggu, 6 Juni 2021 17:40',
    type    : 'tarik'
  },
  {
    saldo   : 'Rp10.000',
    info    : 'Jasa pengantaran pesanan',
    detail  : '#51234441109',
    dateTime: 'Sabtu, 5 Juni 2021 19:53',
    type    : ''
  },
  {
    saldo   : 'Rp59.500',
    info    : 'Biaya pengganti pesanan',
    detail  : '#51234441109',
    dateTime: 'Sabtu, 5 Juni 2021 19:53',
    type    : ''
  },
]

const Wallet = (props) => {
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
              <View style={{width:'100%', flexDirection:'row'}}>
                <View style={{width:'25%', marginRight:10}}>
                  <Text style={[StyleGlob.title5,{ 
                    color: item.type === 'tarik'? redColor : greenColor
                  }]}>{item.saldo}</Text>
                </View>
                <View style={{width:'70%', marginLeft:10}}>
                  <Text style={StyleGlob.caption2}>{item.info}</Text>
                  {
                    item.detail !== '' &&
                    <Text style={[StyleGlob.caption2,{
                      color:'rgb(9, 132, 227)', 
                      borderBottomColor:'rgb(9, 132, 227)',
                      textDecorationLine: 'underline'
                    }]}>
                      {item.detail}
                    </Text>
                  }
                  <View style={{
                    alignItems:'flex-end', 
                    marginTop:10
                  }}>
                    <Text style={StyleGlob.subtitle4}>{item.dateTime}</Text>
                  </View>
                </View>
              </View>
            </View>
          )
        }}
      />
    );
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
          <Title style={[StyleGlob.caption3,{color:'black',marginBottom:20}]}>Saldo: Rp0</Title>
        </View>

        <TouchableOpacity 
          style={{
            width:'90%',
            alignSelf:'center',
            flex:0.5
          }}
          onPress={()=>setToggle(true)}
        >
          <Text style={{textAlign:'center'}}> Kamu belum pernah melakukan pengantaran. Segera dapatkan pesanan untuk diantar agar saldo kamu terisi. </Text>
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
              <View style={{ 
                paddingLeft:10,
                marginTop:10,
                paddingRight:10
              }}>
                <Title style={[StyleGlob.caption3,{color:'white'}]}> Saldo: Rp0</Title>
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
    backgroundColor:'white', 
    borderWidth:0.8,
    borderRadius:6,
    marginTop:15,
    borderColor:'#1EAAF1',
    padding:15,
    paddingTop:10,
    paddingBottom:15
  }
});

export default Wallet;
