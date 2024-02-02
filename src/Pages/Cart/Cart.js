import React,{useState,Fragment} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Dimensions,
  Text,
  Image,
  TouchableOpacity,
  useColorScheme,
  View,
  TextInput,
} from 'react-native';

import { 
  Container, 
  Left,
  Body,
  Right,
  CheckBox,
  Header,
  Card,
  Label,
  CardItem,
  Item, 
  Input, 
  Icon, 
  Content,
  List,
  ListItem,
  Radio,
  Button
} from 'native-base';

import AppFrame from 'CourierKupesan/src/Components/AppFrame';
import radioButton from 'CourierKupesan/src/Components/radioButton';
import SearchInput from 'CourierKupesan/src/Components/SearchInput';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AppActions from 'CourierKupesan/src/Config/Storage/Actions';

const { width, height } = Dimensions.get('window');

const Cart = ({ navigation, user }) => {

  const [qty, setQty] = useState(0);

  const renderPayment = () =>{
    return(
      <List>
        <ListItem itemHeader noIndent>
          <Label> Pembayaran </Label>
        </ListItem>
        <ListItem noBorder={true} >
          <Radio selected={false}/>
          <Text> GoPay </Text>
        </ListItem>
        <View style={{
          borderWidth:0.5,
          margin:20,
          borderRadius:5
        }}>
          <TextInput
            multiline={true}
            numberOfLines={4}
          />
        </View>
        <ListItem noBorder={true}>
          <Radio selected={true}/>
          <Text> Ovo </Text>
        </ListItem>
      </List>
    );
  }

  const renderCarts = () =>{
    return(
      <Card style={{
        marginTop: 20,
      }}>
        <CardItem header style={{
          borderBottomWidth:0.3
        }}>
          <Left style={{flex:0.2}}>
            <CheckBox checked={true} />
          </Left>
          <Body style={{flex:0.8}}>
            <Text>Solaria</Text>
          </Body>
          <Right/>
        </CardItem>
        <CardItem>
          <Left style={{flex:0.15}}>
            <CheckBox checked={true} />
          </Left>
          <Body style={{flex:0.4}}>
            <Image 
              source={{uri: 'http://bit.ly/2GfzooV'}}
              style={{
                height: 100,
                width: 100,
                borderRadius: 10
              }}
            />
          </Body>
          <Right style={{
            flex:0.65,
            height:'100%',
          }}>
            <View style={{ 
              alignItems:'flex-start',
              width:'100%'
            }}>
              <Text style={{textAlign:'left'}}>
                Tester
              </Text>
            </View>
           </Right>
        </CardItem>
        <CardItem footer>
          <Left>
            <Text> Tulis Ulasan</Text>
          </Left>
          <Right style={{
            flexDirection:'row',
            justifyContent:'space-between'
          }}>
            <TouchableOpacity >
              <Icon name="trash-outline"  style={{fontSize: 40}}/>
            </TouchableOpacity>
            <View>
              <View
                style={{
                  borderWidth:1,
                  borderRadius:10,
                  width:100,
                  height:40,
                  flexDirection:'row'
                }}
              >
                <Item style={{
                  width: 70, 
                  alignSelf:'flex-start',
                  height:'100%', 
                  borderRightWidth:0.5 
                }}>
                  <Input
                    value={qty.toString()}
                    keyboardType="numeric"
                  />
                </Item>
                <View
                  style={{
                    flexDirection:'column',
                    justifyContent:'center'
                  }}
                >
                  <TouchableOpacity style={{
                    borderBottomWidth:0.5
                  }}>
                    <Icon name="chevron-up-outline"/>
                  </TouchableOpacity>
                  <TouchableOpacity tyle={{
                    borderTopWidth:0.5
                  }}>
                    
                    <Icon name="chevron-down-outline"/>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          
          </Right>
        </CardItem>
      </Card>
    );
  }

  return (
    <AppFrame
      headerLeft={
        <View style={{flexDirection: 'row'}}>
          <View>
            <Text> Logo </Text>
          </View>
          <View>
            <TouchableOpacity 
              activeOpacity={0.5}
              style={{
                height: 25,
                width: (width * 0.5),
                borderColor: '#C4C4C4',
                borderBottomWidth: 0.5,
                paddingLeft: 10,
                alignItems: 'center',
                justifyContent: 'space-between',
                flexDirection: 'row',
              }}>
              <Text
                allowFontScaling={false}
              >
                Lobi Tower A
              </Text>
              <View style={{
                flex: 0.3,
                height: 25,
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <Icon name="chevron-forward-outline" size={10} color="#4F8EF7" />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      }
      headerRight={
        <View style={{flexDirection: 'row',}}>
          <TouchableOpacity style={{
            width: 36,
            height: 36,
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 10,
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            borderRadius: 100,
          }}>
            <Icon name="ellipsis-vertical-outline" />
          </TouchableOpacity>
        </View>
      }
      renderContent={
        <Container>
          <Content style={{backgroundColor:'#F5F5F5'}}>
            <Card style={{marginTop:20}}>
              <CardItem>
                <Left style={{flex:0.2}}>
                  <CheckBox checked={true} />
                </Left>
                <Body style={{flex:0.8}}>
                  <Text>Pilih Semua</Text>
                </Body>
                <Right/>
              </CardItem>
            </Card>
            <View style={{
              paddingLeft: 5,
              paddingRight: 5
            }}>
              {renderCarts()}
            </View>

            {renderPayment()}
          </Content>

          <View style={{
            position:'absolute',
            width,
            bottom: 20,
            zIndex: 100
          }}>
            <Button style={{
              marginLeft:10,
              marginRight:10,
              borderRadius: 50
            }}
            onPress={()=> navigation.goBack()}
            >
              <Icon name="return-up-back-outline" color="#4F8EF7" />
            </Button>
          </View>
        </Container>
      }
    />
  );
}

const styles = StyleSheet.create({
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
    },
    highlight: {
      fontWeight: '700',
    },
});

export default Cart;
