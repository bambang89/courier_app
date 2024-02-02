import React, {Fragment, useState, useEffect } from 'react';
import {
  Dimensions,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  View,
  FlatList,
  Modal,
} from 'react-native';

import { 
  Body,
  Label,
  Header,
  Card,
  CardItem,
  Item, 
  Input, 
  Icon, 
  Content,
  Switch,
  Button,
  Right,
  Title
} from 'native-base';

import AppFrame from 'CourierKupesan/src/Components/AppFrame';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AppActions from 'CourierKupesan/src/Config/Storage/Actions';

import StyleGlob from 'CourierKupesan/src/GlobalStyle';
import ImageLoader from 'CourierKupesan/src/Config/Helpers/ImagesLoader';
import * as Hooks from 'CourierKupesan/src/Config/Helpers/Hooks';

const { width, height } = Dimensions.get('window');
const SECONDS = 30;

const Orde = (props) => {
  const {
    showOrderOpen,
    getOrderfunct,
    rejectFunction
  } = props;
  const [toggle, setToggle] = useState(false);
  const [toggleAlert, setToggleAlert] = useState(false);
  const [timeLeft, setTimeLeft] = useState(SECONDS);

  // useEffect(() => { 
  //   setToggle(showOrderOpen);
  // }, []);

  useEffect(() => {
    if(timeLeft === 0){
      rejectOrder();
      setTimeLeft(SECONDS);
    }

    // exit early when we reach 0
    if (!timeLeft) return;

    let intervalId;

    // save intervalId to clear the interval when the
    // component re-renders
    intervalId = setInterval(() => {
      if(showOrderOpen === true){
        setTimeLeft(timeLeft - 1);
      }
    }, 1000);

    // clear interval on re-render to avoid memory leaks
    return () => clearInterval(intervalId);
    // add timeLeft as a dependency to re-rerun the effect
    // when we update it
  },[showOrderOpen, timeLeft]);

  const detailsCustomer = () =>{
    return(
      <View style={{ 
        alignSelf:'flex-start', 
        padding:15
      }}>
        <View style={{
          width:'100%',
          flexDirection:'row', 
          alignItems:'center',
          marginBottom:10
        }}>
          <Image
            fadeDuration={0}
            source={ImageLoader('avatar_icon')}
            style={[
              StyleGlob.xsImgBox,
              {
                tintColor: 'black'
              }
            ]}
          />
          <Text style={{marginLeft:5}}> Yunita</ Text>
        </View>
        <View style={{
          width:'100%',
          flexDirection:'row', 
          alignItems:'center',
          marginBottom:10
        }}>
          <Image
            fadeDuration={0}
            source={ImageLoader('office_icon')}
            style={[
              StyleGlob.xsImgBox,
              {
                tintColor: 'black'
              }
            ]}
          />
          <Text style={{marginLeft:5}}> Mall Of Indonesia</ Text>
        </View>
        <View style={{
          width:'100%',
          flexDirection:'row', 
          alignItems:'center',
          marginBottom:10
        }}>
          <Image
            fadeDuration={0}
            source={ImageLoader('target_icon')}
            style={[
              StyleGlob.xsImgBox,
              {
                tintColor: 'black'
              }
            ]}
          />
          <Text style={{marginLeft:5}}> Lobi Utama</ Text>
        </View>
        <View style={{
          width:'100%',
          flexDirection:'row', 
          alignItems:'center',
          marginBottom:10
        }}>
           <Image
            fadeDuration={0}
            source={ImageLoader('comment')}
            style={[
              StyleGlob.xsImgBox,
              {
                tintColor: 'black'
              }
            ]}
          />
          <Text style={{marginLeft:5}}> "Titip Di resepsionis ya pak"</ Text>
        </View>
      </View>
    );
  }

  const listOrder = () => {
    return(
      <View style={{
        paddingLeft:10, 
        paddingRight:10,
        marginBottom:10
      }}>
        <Title style={{color:'#1EAAF1', marginBottom:10}}> Pesanan </Title>
        <View style={{width:'100%', flexDirection:'row', marginBottom:10}}>
          <View style={{width:'43%', marginRight:10}}>
            <Image 
              source={{uri: 'http://bit.ly/2GfzooV'}}
              style={{
                height: 130,
                width: 150,
                borderRadius: 10
              }}
            />
          </View>
          <View style={{
            width: '55%',
            flexDirection:'column'
          }}>
            <Text style={{color:'black', marginLeft:5}}> Nasi Goreng Spesial </Text>
            <Text style={{color:'black', marginLeft:5}}> Rp33.000 </Text>
            <View style={{flexDirection:'row', marginTop:5, alignItems:'center'}}>
              <Image
                fadeDuration={0}
                source={ImageLoader('pen_icon')}
                style={[
                  StyleGlob.xxsImgBox,
                  {
                    tintColor: '#FD9727'
                  }
                ]}
              />
              <Text style={{color:'black', marginLeft:5}}> Pedas Sedang </ Text>
            </View>
             <View style={{flexDirection:'row', marginTop:5, alignItems:'center'}}>
              <Image
                fadeDuration={0}
                source={ImageLoader('store_icon')}
                style={[
                  StyleGlob.xxsImgBox,
                  {
                    tintColor: '#FD9727'
                  }
                ]}
              />
              <Text style={{color:'black', marginLeft:5}}> Solaria </ Text>
            </View>
             <View style={{flexDirection:'row', marginTop:5, alignItems:'center'}}>
              <Image
                fadeDuration={0}
                source={ImageLoader('point_icon')}
                style={[
                  StyleGlob.xxsImgBox,
                  {
                    tintColor: '#FD9727'
                  }
                ]}
              />
              <Text style={{color:'black', marginLeft:5}}> Mall Of Indonesia </ Text>
            </View>
          </View>
        </View>
        <View style={{width:'100%', flexDirection:'row', marginBottom:10}}>
          <View style={{width:'43%', marginRight:10}}>
            <Image 
              source={{uri: 'http://bit.ly/2GfzooV'}}
              style={{
                height: 130,
                width: 150,
                borderRadius: 10
              }}
            />
          </View>
          <View style={{
            width: '55%',
            flexDirection:'column'
          }}>
            <Text style={{color:'black', marginLeft:5}}> Paket A </Text>
            <Text style={{color:'black', marginLeft:5}}> Rp33.000 </Text>
             <View style={{flexDirection:'row', marginTop:5, alignItems:'center'}}>
              <Image
                fadeDuration={0}
                source={ImageLoader('pen_icon')}
                style={[
                  StyleGlob.xxsImgBox,
                  {
                    tintColor: '#FD9727'
                  }
                ]}
              />
              <Text style={{color:'black', marginLeft:5}}> Pedas Sedang </ Text>
            </View>
             <View style={{flexDirection:'row', marginTop:5, alignItems:'center'}}>
              <Image
                fadeDuration={0}
                source={ImageLoader('store_icon')}
                style={[
                  StyleGlob.xxsImgBox,
                  {
                    tintColor: '#FD9727'
                  }
                ]}
              />
              <Text style={{color:'black', marginLeft:5}}> Solaria </ Text>
            </View>
             <View style={{flexDirection:'row', marginTop:5, alignItems:'center'}}>
              <Image
                fadeDuration={0}
                source={ImageLoader('point_icon')}
                style={[
                  StyleGlob.xxsImgBox,
                  {
                    tintColor: '#FD9727'
                  }
                ]}
              />
              <Text style={{color:'black', marginLeft:5}}> Mall Of Indonesia </ Text>
            </View>
          </View>
        </View>
      </View>
    );
  }

  const paymentOrder = () => {
    return(
      <View style={{
        paddingLeft:10, 
        paddingRight:10,
        marginBottom:10
      }}>
        <Title style={{color:'#1EAAF1', marginBottom:10}}> Pembayaran Untuk Restoran </Title>
        <View style={{ width:'100%', marginBottom:10, flexDirection:'row', justifyContent:'space-between'}}>
          <Text> Hokben </Text>
          <Text> Rp29.700 </Text>
        </View>
        <View style={{ width:'100%', marginBottom:10, flexDirection:'row', justifyContent:'space-between'}}>
          <Text> Solaria </Text>
          <Text> Rp33.000 </Text>
        </View>
        <View style={{ width:'100%', marginBottom:10, flexDirection:'row', justifyContent:'space-between'}}>
          <Text> Total </Text>
          <Text> Rp62.700 </Text>
        </View>
      </View>
    );
  }

  const paymentService = () =>{
    return (
      <View style={{
        paddingLeft:10, 
        paddingRight:10,
        marginBottom:10
      }}>
        <Title style={{color:'#1EAAF1', marginBottom:10}}> Jasa Pengantar </Title>
        <View style={{ width:'100%', marginBottom:10, flexDirection:'row', justifyContent:'space-between'}}>
          <Text> Keuntungan </Text>
          <Text> Rp10.000 </Text>
        </View>
        <View style={{ width:'100%', marginBottom:10, flexDirection:'row', justifyContent:'space-between'}}>
          <Text> Tambahan Ke Saldo </Text>
          <Text> Rp72.700 </Text>
        </View>
      </View>
    );
  }


  function rejectOrder() {
    rejectFunction();
    setToggle(false);
    setToggleAlert(false);
  }

  const modalAlert = () => {
    return(
      <Modal 
        transparent={true}
        animationType='fade'
        visible={toggleAlert}
        onRequestClose={() => {
          Hooks.consoleLog(TAG +'close modal')
        }}
      >
        <View style={{
          flex: 1,
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'space-around',
          backgroundColor: '#00000040'
        }}>
          <View style={{
             backgroundColor: 'white',
             width:'75%',
             padding:20,
             borderRadius: 6,
             display: 'flex',
          }}>
            <Title style={{color:'black'}}>
              Menolak Pesanan
            </Title>

            <View style={{marginTop:20}}>
              <Text>
                Yakin ingin menolak pesanan ini?
              </Text>
            </View>
            <View style={{marginTop:20}}>
              <Text>
                Kamu sudah menolak 2 pesanan dalam 24 jam terakhir.
              </Text>
            </View>
            <View style={{marginTop:20}}>
              <Text>
                Perhatian menolak hingga 3 pesanan dalam 24 jam akan membuat kamu DIBEKUKAN selama 24 jam kedepan.
              </Text>
            </View>

            <TouchableOpacity 
              style={{marginTop:20, alignItems:'center'}}
              onPress={()=>rejectOrder()}
            >
              <Text style={{color:'red'}}> TOLAK PESANAN </Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={{marginTop:20, alignItems:'center'}}
              onPress={()=>setToggleAlert(false)}
            >
              <Text> Kembali </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    )
  }

  return (
    <Modal 
      transparent={true}
      animationType='fade'
      visible={showOrderOpen}
      onRequestClose={() => {Hooks.consoleLog(TAG +'close modal')}}
    >
      {modalAlert()}
      <View style={{
        flex:1,
        backgroundColor:'white',
      }}>
        <Header
          noShadow={true}
          style={{
            backgroundColor:'transparent'
          }}
        >
          <Right>
            <Button transparent onPress={()=> setToggleAlert(true)}>
              <Icon name='close-outline' style={{color:'red', fontSize:35}}/>
            </Button>
          </Right>
        </Header>
        <View style={{
          width,
          paddingLeft:10,
          paddingRight:10,
          flexDirection:'row',
          justifyContent:'space-between',
          paddingTop:20,
          paddingBottom:20,
          backgroundColor:'#1EAAF1'
        }}>
          <Title> Pesanan Baru </Title>
          <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
            <Icon name='stopwatch-outline' style={{color:'white'}}/>
            <Text style={{color:'white', marginLeft:5}}> {timeLeft} detik</ Text>
          </View>
        </View>
        <Content>
          {detailsCustomer()}
          {listOrder()}
          {paymentOrder()}
          {paymentService()}

          <View style={{paddingLeft:20,paddingRight:20}}>
            <Button block style={{
              marginBottom:10, 
              marginTop:10, 
              borderRadius:6,
              backgroundColor:'#1EAAF1'
            }}
              onPress={()=> getOrderfunct(false)}
            >
              <Text style={{color:'white'}}>Terima</Text>
            </Button>
            <Button block style={{
              marginBottom:10, 
              marginTop:10, 
              borderRadius:6,
              backgroundColor:'red'
            }}
            onPress={()=> setToggleAlert(true)}
            >
              <Text style={{color:'white'}}>Tolak</Text>
            </Button>
          </View>
        </Content>
      </View>
    </Modal>
  );
}

export default Orde;
