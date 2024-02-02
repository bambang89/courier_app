import React, {Fragment, useState } from 'react';
import {
  Dimensions,
  Text,
  Image,
  ToastAndroid,
  Alert,
  TouchableOpacity,
  ActivityIndicator,
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
  Right,
  CardItem,
  Item, 
  Input,
  Title, 
  Icon, 
  Content,
  Switch,
  CheckBox,
  Button
} from 'native-base';

import Clipboard from '@react-native-community/clipboard';

import AppFrame from 'CourierKupesan/src/Components/AppFrame';
import ImageLoader, {selectImage} from 'CourierKupesan/src/Config/Helpers/ImagesLoader';
import * as Hooks from 'CourierKupesan/src/Config/Helpers/Hooks';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AppActions from 'CourierKupesan/src/Config/Storage/Actions';
import StyleGlob from 'CourierKupesan/src/GlobalStyle';

import Order from 'CourierKupesan/src/Pages/Order/Order';
import {Picker} from '@react-native-picker/picker';

const { width, height } = Dimensions.get('window');

const Home = (props) => {
  const {navigation} = props;
  const [getOrder, setGetOrder] = useState(false);
  const [showOrder, setShowOrder] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState();
  const [status, setStatus] = useState('ISTIRAHAT');
  const [getImage, setGetImage] = useState('');
  const [getCheck, setGetCheck] = useState(false);
  const [suspend, setSuspend] = useState(false);
  const [receiver, setReceiver] = useState('');
  const [note, setNote] = useState('');

  function selectOn(value = false){
    setStatus(value ? 'BEKERJA' : 'ISTIRAHAT');
    setToggle(value);
  }

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

  function selectPicture(){
    selectImage(
      'single'
    ).then((result) => {
      Hooks.consoleLog(`UploadImage Result`, result);
      setGetImage(result.path);
    }).catch((err) => {
      Hooks.consoleLog(`UploadImage Error`, err);
    });
  }

  function orderPages(){
    setShowOrder(true);
  }

  function getOrderModal(){
    setShowOrder(false);
    setGetOrder(true);
  }

  function checkListItems(){
    Alert.alert(
      '',
      'Selesai dibuat/disiapkan?',
      [
      {
        text: 'Kembali', onPress: () => {
          setGetCheck(false);
        }
      },
      {
        text: 'Benar', onPress: () => {
          setGetCheck(true);
        }
      }
    ]
    );
  }

  function doneOrder(){
    setShowOrder(false);
    setShowPayment(false);
    setShowDetails(false);
    setGetOrder(false);
    setGetCheck(false);
  }

  const homeStatusInfo = () =>{
    if(suspend){
      return (
        <View style={{
          alignItems:'center', 
          height:(height * 0.6),
          justifyContent:'center'
        }}>
          <Image
            fadeDuration={0}
            source={ImageLoader('block_icon')}
            style={[
              StyleGlob.xxxlImgBox,
              {
                tintColor: 'black',
                marginBottom: 20
              }
            ]}
          />
          <View style={{alignItems:'center'}}>
            <Text> Kamu sedang berada di dalam status {status}. </Text>
            <Text> Status ini akan pulih pada 30 Mei 2021 pukul 15:01.  </Text>
          </View>
        </View>
      );
    }
    return (
      <View style={{
        alignItems:'center', 
        height:(height * 0.6),
        justifyContent:'center'
      }}>
        <Image
          fadeDuration={0}
          source={ImageLoader('remove_date_icon')}
          style={[
            StyleGlob.xxxlImgBox,
            {
              tintColor: 'black',
              marginBottom: 20
            }
          ]}
        />
        <View style={{alignItems:'center'}}>
          <Text> Kamu sedang berada di dalam status {status}. </Text>
          <Text> Tekan tombol Status di atas untuk menerima pesanan.  </Text>
        </View>
      </View>
    )
  }

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
          marginBottom:5
        }}>
          <Image
            fadeDuration={0}
            source={ImageLoader('date_icon')}
            style={[
              StyleGlob.xxsImgBox,
              {
                tintColor: 'black'
              }
            ]}
          />
          <Text style={{marginLeft:5}}> 26 Mei 2021 14:03</ Text>
        </View>
        <View style={{
          width:'100%',
          flexDirection:'row', 
          alignItems:'center',
          marginBottom:5
        }}>
          <Image
            fadeDuration={0}
            source={ImageLoader('avatar_icon')}
            style={[
              StyleGlob.xxsImgBox,
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
          marginBottom:5
        }}>
          <Image
            fadeDuration={0}
            source={ImageLoader('office_icon')}
            style={[
              StyleGlob.xxsImgBox,
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
          marginBottom:5
        }}>
          <Image
            fadeDuration={0}
            source={ImageLoader('target_icon')}
            style={[
              StyleGlob.xxsImgBox,
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
          marginBottom:5
        }}>
           <Image
            fadeDuration={0}
            source={ImageLoader('comment')}
            style={[
              StyleGlob.xxsImgBox,
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

  const listOrder = () =>{
    return(
      <View style={{
        paddingLeft:10, 
        paddingRight:10,
        marginBottom:10
      }}>
        <Title style={{color:'black', marginBottom:20}}> Daftar Pesanan </Title>
        <View>
          <Label style={{color:'#FD9727', marginBottom:10}}> Chatime </Label>
          <View style={{width:'100%',padding:10, paddingRight:20}}>
            <View style={{ 
              width:'100%', 
              flexDirection:'row', 
              justifyContent:'space-between',
              alignItems:'center',
              marginBottom:10
            }}>
              <Text> Menuju Restoran </Text>
               <Image
                fadeDuration={0}
                source={ImageLoader('checklist')}
                style={[
                  StyleGlob.xxsImgBox,
                  {
                    tintColor: 'black'
                  }
                ]}
              />
            </View>
            <View style={{ 
              width:'100%', 
              flexDirection:'row', 
              justifyContent:'space-between',
              alignItems:'center',
              marginBottom:10
            }}>
              <Text> Masuk Antrian </Text>
               <Image
                fadeDuration={0}
                source={ImageLoader('checklist')}
                style={[
                  StyleGlob.xxsImgBox,
                  {
                    tintColor: 'black'
                  }
                ]}
              />
            </View>
            <View style={{ 
              width:'100%', 
              flexDirection:'row', 
              justifyContent:'space-between',
              alignItems:'center',
              marginBottom:10
            }}>
              <Text> Pesanan sedang dibuat/disiapkan </Text>
              <Image
                source={ImageLoader('checklist')}
                style={[
                  StyleGlob.xxsImgBox,
                  {
                    tintColor: 'black',
                  }
                ]}
              />
            </View>
            <View style={{ 
              width:'100%', 
              flexDirection:'row', 
              justifyContent:'space-between',
              alignItems:'center',
              marginBottom:10
            }}>
              <Text> Selesai dibuat/disiapkan </Text>
              {
                getCheck ?
                <Image
                  fadeDuration={0}
                  source={ImageLoader('checklist')}
                  style={[
                    StyleGlob.xxsImgBox,
                    {
                      tintColor: 'black'
                    }
                  ]}
                />
                :
                <View style={{marginRight:10}}>
                  <CheckBox 
                    checked={getCheck} 
                    onPress={()=>checkListItems()}
                  />
                </View>
              }
            </View>
          </View>
          <View style={{width:'100%', flexDirection:'row', justifyContent:'flex-end'}}>
            <Button iconLeft 
              style={{
                paddingRight:10, 
                paddingRight:10,
                borderRadius:6
              }}
              onPress={()=> setShowDetails(true)}
            >
              <Icon name='basket-outline' />
              <Text style={{
                color:'white',
                marginLeft:10
              }}>Lihat Pesanan</Text>
            </Button>
          </View>
        </View>
      </View>
    );
  }

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
            <Right>
              <Button transparent onPress={()=> setShowDetails(false)}>
                <Icon name='close-outline' style={{color:'black', fontSize:35}}/>
              </Button>
            </Right>
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
              <View style={{
                width:'100%',
                flexDirection:'row',
                alignItems:'center',
              }}>
                <Label style={{width:'30%'}}>No.antrian:</Label>
                <Item style={{width:'70%'}}>
                  <Input 
                    placeholder="Diisi oleh pelayan resto, jika perlu" 
                  />
                </Item>
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

  const paymentDetails = () =>{
    return(
      <Modal
        transparent={true}
        animationType='slide'
        visible={showPayment}
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
            <Right>
              <Button transparent onPress={()=> setShowPayment(false)}>
                <Icon name='close-outline' style={{color:'black', fontSize:35}}/>
              </Button>
            </Right>
          </Header>
          <Content>
            <View style={{
              marginTop:10,
              paddingLeft:10, 
              paddingRight:10,
              marginBottom:10
            }}>
              <Title style={{color:'black', marginBottom:10}}> Pembayaran Untuk Restoran </Title>
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
            <View style={{
              marginTop:10,
              paddingLeft:10, 
              paddingRight:10,
              marginBottom:10
            }}>
              <Title style={{color:'black', marginBottom:10}}> Jasa Pengantar </Title>
              <View style={{ width:'100%', marginBottom:10, flexDirection:'row', justifyContent:'space-between'}}>
                <Text> Keuntungan </Text>
                <Text> Rp10.000 </Text>
              </View>
              <View style={{ width:'100%', marginBottom:10, flexDirection:'row', justifyContent:'space-between'}}>
                <Text> Tambahan Ke Saldo </Text>
                <Text> Rp72.700 </Text>
              </View>
            </View>

            <View style={{
              width:'100%',
              paddingLeft:20,
              paddingRight:20,
              marginTop:20
            }}>
              <Button 
                block 
                bordered
                onPress={()=> setShowPayment(false)}
              >
                <Text> Kembali Ke Sattus Pemesanan</Text>
              </Button>
            </View>
          </Content>
        </View>
      </Modal>
    )
  }

  const homeDefault = () =>{

    if(suspend){
      return(
        <Content>
          <View style={style.textSpace}>
            <Text>Status: <Text> {status} </Text></Text>
            <Switch 
              value={toggle}
              onValueChange={(value) => selectOn(value)}
            />
          </View>
          {homeStatusInfo()}
        </Content>
      )
    }
    
    return(
      <>
        <Content>
          {
            !toggle ?
            <View>
              <Picker
                note
                mode="dropdown"
                // mode="dialog"
                style={{ borderBottomWidth:0.5, borderBottomColor:'red' }}
                selectedValue={selectedLanguage}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedLanguage(itemValue)
                }
              >
                <Picker.Item label="- Pilih Wilayah -" value="" />
                <Picker.Item label="Mall Central Park, Jakarta" value="Mall Central Park, Jakarta" />
                <Picker.Item label="Mall Of Indonesia, Jakarta" value="Mall Central Park, Jakarta" />
              </Picker>
            </View>
            :
            <View style={[style.textSpace,{marginTop:10}]}>
              <Text>Wilayah:</Text>
              <Text>{selectedLanguage}</Text>
            </View>
          }

          <View style={style.textSpace}>
            <Text>Status: <Text> {status} </Text></Text>
            <Switch 
              value={toggle}
              onValueChange={(value) => selectOn(value)}
            />
          </View>
          {
            !toggle ?
            homeStatusInfo()
            :
            <View style={{marginTop:'30%', alignItems:'center'}}>
              <ActivityIndicator size={150} animating color="#1185bb"/>
              <TouchableOpacity onPress={()=>orderPages()} style={{marginTop:50}}>
                <Text>Menunggu pesanan baru...</Text>
              </TouchableOpacity>
            </View>
          }
        </Content>

        {
          toggle&&
          <View style={[style.bottomView2,{width:'100%'}]}>
            <Text style={{textAlign:'center'}}>Untuk mengganti wilayah, kembali dulu ke status ISTIRAHAT.</Text>
          </View>
        }
      </>
    );
  }

  const homeListOrder = () =>{
    return(
      <>
        <Content>
          <View style={{
            width, 
            alignItems:'center',
            justifyContent:'flex-end', 
            marginTop:20,
            paddingLeft:10, 
            paddingRight:10,
            flexDirection:'row'
          }}>
            <TouchableOpacity 
              style={{marginRight:10}}
              onPress={()=> setShowPayment(true)}
            >
              <Text style={{
                borderBottomWidth:0.5,
                borderBottomColor:'#1EAAF1',
                color:'#1EAAF1'
              }}> #210424110955999 </Text>
            </TouchableOpacity>
            <Icon name='copy-outline' style={{color:'#1EAAF1'}} onPress={()=>showToast()}/>
          </View>
          {detailsCustomer()}
          {listOrder()}
          {
            getCheck&&

            <View style={{
              marginTop:20, 
              paddingRight:10,
              marginBottom:10,
              marginBottom:'20%'
            }}>
               <View style={{
                width:'100%', 
                padding:10,
                paddingLeft:20, 
                paddingRight:20
              }}>
                <View style={{
                  width:'100%', 
                  flexDirection:'row', 
                  justifyContent:'space-between',
                  alignItems:'center',
                  marginBottom:10
                }}>
                  <Text>Penerima:  <Input
                    onChangeText={(password) => setPassword(password)}
                    value={password}
                    secureTextEntry={showPassword} 
                  />
                  </Text>
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
                </View>
                <View style={{
                  width:'100%', 
                  flexDirection:'row', 
                  justifyContent:'space-between',
                  alignItems:'center',
                  marginBottom:10
                }}>
                  <Text>Catatan: <Text> (Kosong) </Text></Text>
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
                </View>
                <View style={{paddingTop:10}}>
                  <Text>Foto: </Text>
                </View>
                <View style={{width:'100%', marginBottom:20, alignItems:'center'}}>
                  {
                    getImage!==''&&
                    <View style={{position:'absolute'}}>
                      <Image 
                        source={{uri: getImage}}
                        style={{
                          height: 180,
                          width: 150,
                          borderRadius: 10
                        }}
                      />
                    </View>
                  }
                  <TouchableOpacity style={{
                    width:150,
                    height:180,
                    borderWidth:0.5,
                    alignItems:'center',
                    justifyContent:'center',
                    borderRadius:10
                  }}
                  onPress={()=> selectPicture()}
                  >
                    {/* <Icon name='add-outline' /> */}
                  </TouchableOpacity>
                </View>
              </View>
              <View style={[style.bottomView,{marginTop:40, position:'relative'}]}>
                <Button iconLeft block style={{borderRadius:6, backgroundColor:'#a6a6a6'}}
                  onPress={()=> doneOrder()}
                >
                  <Text style={{marginLeft:10, color:'white'}}> Selesai </Text>
                </Button>
              </View>

            </View>
          }
        </Content>
        <View style={[style.bottomView]}>
            <Button iconLeft block style={{borderRadius:6, backgroundColor:'#FD9727'}}
              onPress={()=> navigation.navigate('Chat')}
            >
            <Icon name='chatbox-ellipses-outline' />
            <Text style={{marginLeft:10, color:'white'}}>Kirim Pesan</Text>
          </Button>
        </View>
      </>
    );
  }

  return (
    <AppFrame
      headerTimmer={getOrder}
      renderContent={
        <>
          <Order
            showOrderOpen={showOrder}
            getOrderfunct={()=>getOrderModal()}
            rejectFunction={()=>setShowOrder(false)}
          />
          {detailsOrder()}
          {paymentDetails()}
          {
            !getOrder ?
            homeDefault()
            :
            homeListOrder()
          }
        </>
      }
    />
  );
}

const style =  StyleSheet.create({
  textSpace:{
    width, 
    padding:15, 
    flexDirection:'row',
    justifyContent:'space-between' 
  },
  bottomView:{
    position:'absolute',
    width,
    paddingLeft:30,
    paddingRight:30,
    bottom:30
  },
  bottomView2:{
    position:'absolute',
    width,
    padding:20,
    paddingTop:10,
    paddingBottom:10,
    alignItems:'center',
    bottom:10,
    backgroundColor:'#FD9727'
  }

});

export default Home;
