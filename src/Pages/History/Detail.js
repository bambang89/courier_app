import React, {Fragment, useState } from 'react';
import {
  Dimensions,
  Text,
  Image,
  View,
  ToastAndroid,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Modal
} from 'react-native';

import { 
  Body,
  Card,
  Header,
  Right,
  Button,
  Icon,
  CardItem,
  Content, 
  Label, 
  Input,
  Title, 
  Item,
  Form,
  Left
} from 'native-base';

import Clipboard from '@react-native-community/clipboard';

import AppFrame from 'CourierKupesan/src/Components/AppFrame';
import DashedLine from 'CourierKupesan/src/Components/DashedLine';
import * as Hooks from 'CourierKupesan/src/Config/Helpers/Hooks';
import StyleGlob from 'CourierKupesan/src/GlobalStyle';

import ImageLoader, {selectImage} from 'CourierKupesan/src/Config/Helpers/ImagesLoader';

const { width, height } = Dimensions.get('window');

const Detail = (props) => {
  const {navigation} = props;
  const [showDetails, setShowDetails] = useState(false);

  const showToast = () => {
    Clipboard.setString('#210424110955999');
    ToastAndroid.showWithGravityAndOffset(
      "Berhasil di salin",
      ToastAndroid.LONG,
      ToastAndroid.TOP,
      25,
      50
    );
  };

  const detailsOrder = () =>{
    return(
      <Modal  
        transparent={true}
        animationType='slide'
        visible={showDetails}
        onRequestClose={() => {Hooks.consoleLog(TAG +'close modal')}}
      >
        <View style={{
          flex:1,
          backgroundColor:'white',
        }}>
          <Header
            noShadow={false}
            style={{
              backgroundColor:'transparent'
            }}
          >
            <Left>
              <Button transparent onPress={()=> setShowDetails(false)}>
                <Icon name='arrow-back' style={{color:'black'}}/>
              </Button>
            </Left>
            <Body/>
          </Header>
          <Content>
            <View style={{
              paddingLeft:10, 
              paddingRight:10,
              marginBottom:10
            }}>
              <Title style={[StyleGlob.title7,{color:'#FD9727',marginBottom:20, marginTop:10}]}>Pesanan Solaria</Title>
              <View style={{width:'100%', flexDirection:'row', marginBottom:10}}>
                <View style={{width:'43%', marginRight:10}}>
                  <Image 
                    source={{uri: 'http://bit.ly/2GfzooV'}}
                    style={{
                      height: 160,
                      width: 150,
                      borderRadius: 10
                    }}
                  />
                </View>
                <View style={{
                  width: '55%',
                  flexDirection:'column'
                }}>
                  <Text style={{color:'black', marginLeft:5}}>Nasi Goreng Spesial</Text>
                  <Text style={{color:'black', marginLeft:5, marginTop:10}}>Rp33.000</Text>
                  <View style={{flexDirection:'row', alignItems:'center', marginTop:20}}>
                    <Image
                      fadeDuration={0}
                      source={ImageLoader('pen_icon')}
                      style={[
                        StyleGlob.xxsImgBox,
                        {
                          tintColor: 'black'
                        }
                      ]}
                    />
                    <Text style={{color:'black', marginLeft:5}}>Pedas Sedang</ Text>
                  </View>
                </View>
              </View>
              <View style={{width:'100%', flexDirection:'row', marginBottom:10}}>
                <View style={{width:'43%', marginRight:10}}>
                  <Image 
                    source={{uri: 'http://bit.ly/2GfzooV'}}
                    style={{
                      height: 160,
                      width: 150,
                      borderRadius: 10
                    }}
                  />
                </View>
                <View style={{
                  width: '55%',
                  flexDirection:'column'
                }}>
                  <Text style={{color:'black', marginLeft:5}}>Sapo Tahu</Text>
                  <Text style={{color:'black', marginLeft:5, marginTop:10}}>Rp28.000</Text>
                  <View style={{flexDirection:'row', alignItems:'center', marginTop:20}}>
                    <Text style={{color:'black', marginLeft:5}}>Tidak ada catatan</ Text>
                  </View>
                </View>
              </View>
            </View>

            <View style={{
              marginTop:20,
              paddingLeft:10, 
              paddingRight:10
            }}>
              <View style={{ width:'100%', marginBottom:10, flexDirection:'row', justifyContent:'space-between'}}>
                <Text>Total:</Text>
                <Text>Rp61.000</Text>
              </View>
              <View style={{ width:'100%', marginBottom:10, flexDirection:'row', justifyContent:'space-between'}}>
                <Label style={{width:'30%'}}>No.antrian:</Label>
                <Text>987</Text>
              </View>
            </View>
            <View style={{
              // position:'absolute',
              width:'100%',
              paddingLeft:20,
              paddingRight:20,
              marginTop:'25%'
              //bottom:20
            }}>
              <Button 
                block 
                bordered
                style={{backgroundColor:'#FFF', borderRadius:10 }}
                onPress={()=>setShowDetails(false)}
              >
                <Text>Tutup</Text>
              </Button>
            </View>
          </Content>
        </View>
      </Modal>
    );
  }

  return (
    <AppFrame
      headerLeft={
        <Button transparent onPress={()=> navigation.goBack()}>
          <Icon name='arrow-back' style={{color:'#1EAAF1'}}/>
        </Button>
      }
      headerStatus={true}
      renderContent={
        <Content>
          {detailsOrder()}
          <View style={style.body}>
            <Title style={[StyleGlob.title7,{color:'#FD9727'}]}>Pengantaran Pesanan</Title>
          </View>
          <View style={{
            marginTop:20, 
            width, 
            paddingLeft:20, 
            paddingRight:20
          }}>
            <View style={{flexDirection:'row', paddingBottom:10, justifyContent:'space-between'}}>
              <Label style={StyleGlob.title8}>12 Jun 2021 11:00</Label>
              <Label style={[StyleGlob.title8,{color:'#35B736'}]}>SELESAI</Label>
            </View>
            <View style={{flexDirection:'row', paddingBottom:10, alignItems:'center', justifyContent:'space-between'}}>
              <Text>No.pesanan:</Text>
              <Text>210424110955999  <Icon name='copy-outline' style={{color:'black', fontSize:20}} onPress={()=>showToast()}/></Text>
            </View>
            <View style={{flexDirection:'row', paddingBottom:10, justifyContent:'space-between'}}>
              <Text>Pemesan:</Text>
              <Text 
                onPress={()=> navigation.navigate('Chat')}
                style={[StyleGlob.button3,{
                  color:'rgb(9, 132, 227)', 
                  borderBottomColor:'rgb(9, 132, 227)',
                  textDecorationLine: 'underline'
                }]
              }>Marla</Text>
            </View>
            <View style={{flexDirection:'row', paddingBottom:10, justifyContent:'space-between'}}>
              <Text>Alamat:</Text>
              <Text>Apt.Sessions City, Tower A</Text>
            </View>
            <View style={{flexDirection:'row', paddingBottom:10, justifyContent:'space-between'}}>
              <Text>Catatan:</Text>
              <Text>"Unit JB no 5."</Text>
            </View>

            <Label style={{color:'#1EAAF1'}}>Pembayaran untuk Restoran</Label>
            <View style={{paddingLeft:20, marginTop:20}}>
              <View style={{flexDirection:'row', paddingBottom:10, justifyContent:'space-between'}}>
                <Text>Chatime:</Text>
                <Text 
                  onPress={()=>setShowDetails(true)}
                  style={[StyleGlob.button3,{
                    color:'rgb(9, 132, 227)', 
                    borderBottomColor:'rgb(9, 132, 227)',
                    textDecorationLine: 'underline'
                  }]
                }>Rp29.700</Text>
              </View>
              <View style={{flexDirection:'row', paddingBottom:10, justifyContent:'space-between'}}>
                <Text>Hokben:</Text>
                <Text 
                  onPress={()=>setShowDetails(true)}
                  style={[StyleGlob.button3,{
                    color:'rgb(9, 132, 227)', 
                    borderBottomColor:'rgb(9, 132, 227)',
                    textDecorationLine: 'underline'
                  }]
                }>Rp33.000</Text>
              </View>
              <View style={{flexDirection:'row', paddingBottom:10, justifyContent:'space-between'}}>
                <Text style={StyleGlob.title8}>Jumlah:</Text>
                <Text style={StyleGlob.title8}>Rp62.700</Text>
              </View>
            </View>

            <Label style={{color:'#1EAAF1'}}>Jasa Pengantar</Label>
            <View style={{paddingLeft:20, marginTop:20}}>
              <View style={{flexDirection:'row', paddingBottom:10, justifyContent:'space-between'}}>
                <Text>Keuntungan:</Text>
                <Text style={{color:'#35B736'}}>Rp10.000</Text>
              </View>
              <View style={{flexDirection:'row', paddingBottom:10, justifyContent:'space-between'}}>
                <Text>Tambahan ke saldo:</Text>
                <Text>Rp72.700</Text>
              </View>
            </View>

            <View style={{marginTop:20, marginBottom:10}}>
              <DashedLine dashLength={2} dashThickness={2} dashGap={2} dashColor='#FD9727' dashStyle={{ borderRadius: 5 }} />
            </View>


            <View style={{flexDirection:'row', paddingBottom:10, justifyContent:'space-between'}}>
              <Label>Penerima:</Label>
              <Label>(Tidak diisi)</Label>
            </View>
            <View style={{flexDirection:'row', paddingBottom:10, justifyContent:'space-between'}}>
              <Label style={{width:'50%'}}>Catatan pengantaran:</Label>
              <Label style={{width:'45%', textAlign:'right'}}>Sudah saya titip ka di lobi... selamat menikmati</Label>
            </View>

            <View style={{width:'100%', marginBottom:20, marginTop:20, alignItems:'center'}}>
              <Image 
                source={{uri: 'http://bit.ly/2GfzooV'}}
                style={{
                  height: 200,
                  width: 180,
                  borderRadius: 10
                }}
              />
            </View>

          </View>
          <View style={{
            width:'100%',
            paddingLeft:20,
            paddingRight:20,
            marginTop:20,
            marginBottom:20
          }}>
            <Button 
              block 
              bordered
              style={{backgroundColor:'#FFF', borderRadius:10 }}
              onPress={()=> navigation.goBack()}
            >
              <Text>Tutup</Text>
            </Button>
          </View>
        </Content>
      }
    />
  );
}

const style =  StyleSheet.create({
  body:{
    paddingLeft:20,
    paddingRight:20
  }
});

export default Detail;
