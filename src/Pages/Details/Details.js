import React, {useState, useEffect} from 'react';
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
  FlatList,
  View,
} from 'react-native';

import { 
  Container, 
  Left,
  Label,
  Body,
  Right,
  Header,
  Card,
  CardItem,
  Item, 
  Input, 
  Icon, 
  Content,
  Button,
  Title
} from 'native-base';

import AppFrame from 'CourierKupesan/src/Components/AppFrame';

import * as Hooks from 'CourierKupesan/src/Config/Helpers/Hooks'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AppActions from 'CourierKupesan/src/Config/Storage/Actions';

const { width, height } = Dimensions.get('window');

const listItems = [
  {
    img:'http://bit.ly/2GfzooV',
    body: 'Testing',
    title: 'Nasi Goreng Kampung',
    price: '38000',
    qty: '0',
    total: '0'
  },
  {
    img:'http://bit.ly/2GfzooV',
    body: 'Testing',
    title: 'Mie Ayam Pangsit',
    price: '27000',
    qty: '0',
    total: '0'
  },
  {
    img:'http://bit.ly/2GfzooV',
    body: 'Testing',
    title: 'I Fu Mie',
    price: '36500',
    qty: '0',
    total: '0'
  },
  {
    img:'http://bit.ly/2GfzooV',
    body: 'Testing',
    title: 'Mie Ayam Kangkung',
    price: '30000',
    qty: '0',
    total: '0'
  }
];

const Details = (props) => {
  const { navigation } = props;

  const [qty, setQty] = useState(0);
  const [items, setItems] = useState(listItems);
  const [total, setTotals] = useState(0);
  const [totalqty, setTotalqty] = useState(0);

  const increase = (index) => {
    let itemsData = items;
    let qtyTotalData = totalqty;
    let totalData = total;

    let qtyData = itemsData[index].qty;
    
    if(!qtyData){
      qtyData = '1';
    }

    itemsData[index].qty = parseInt(qtyData) + 1;
    itemsData[index].total = (parseInt(itemsData[index].total) + parseInt(itemsData[index].price));
    setTotalqty(qtyTotalData+1);
    setTotals(totalData + parseInt(itemsData[index].price));
    setItems([...itemsData]);
  }

  const decrease = (index) => {
    let qtyTotalData = totalqty;
    let totalData = total;

    setItems(prevState =>{
      let qtyData = parseInt(prevState[index].qty);
      setTotalqty(qtyTotalData-1);
      
      if(qtyData >= 1){
        prevState[index].qty = parseInt(qtyData) - 1;
        prevState[index].total = (parseInt(prevState[index].total) - parseInt(prevState[index].price));
      }

      setTotals(totalData - parseInt(prevState[index].price));
      return [...prevState ]
    });
  }

  const changesQty = (value, index)=> {

    setItems(prevState =>{
      let qtyData = parseInt(prevState[index].qty);
      if (value != ''){
        prevState[index].qty = value;
        prevState[index].total = parseInt(itemsData[index].price) * parseInt(value);
      }

      return[...prevState] 
    });
  }


  const headerTitle = () =>{
    return(
      <View style={{ 
        width,
        height:40,
        flexDirection:'row'
      }}>
        <Left style={{flex:0.25}}>
          <Button
            transparent
            style={{ alignSelf: 'center' }}
            onPress={() => navigation.goBack()}
          >
            <Icon name="chevron-back-outline" color="#4F8EF7" />
          </Button>
        </Left>
        <Body style={{flex:0.65}}>
          <Label> Solaria </Label>
        </Body>
        <Right style={{
          flex:0.2,
          paddingRight:20,
        }} >
           <Image 
            source={{uri: 'https://www.linkaja.id/uploads/images/merchant/solaria.png'}}
            style={{
              height: 40,
              width: 40
            }}
          />
        </Right>
      </View>
    );
  }

  const buttonRender = () =>{
    return(
      <View style={{
        position:'absolute',
        width,
        bottom: 20,
        zIndex: 100
      }}>
        <Button block rounded warning style={{
          marginLeft:10,
          marginRight:10
        }}
        onPress={()=> navigation.navigate('Cart')}
        >
          <Icon name="cart-outline" size={10} color="#4F8EF7" />
          <View style={{
            flexDirection:'row',
            marginLeft: -10
          }}>
            {
              total !== 0 &&
              <Text style={{color:'#FFF'}}> {Hooks.formatCurrency(total)} </Text>
            }
            <Text style={{color:'#FFF'}}> 1 Resto, {totalqty} Makanan >> </Text>
          </View>
        </Button>
      </View>
    );
  }

  const renderCard = (item, index) =>{
    console.log('isi data renderCard', item);
    return(
      <Card style={{
        width: (width * 0.965),
        borderRadius: 5
      }} 
      >
        <CardItem style={{
          width:'100%',
          borderTopRightRadius:5,
          borderTopLeftRadius:5
        }}
        >
          <Left style={{flex:0.4}}>
            <Image 
              source={{uri: item.img}}
              style={{
                height: 100, 
                width: '100%',
                borderRadius: 5
              }}
            />
          </Left>
          <Body style={{
            flex:0.7, 
            paddingLeft:10
          }}>
            <View style={{
              width:'100%',
              paddingBottom:5,
              borderBottomWidth:0.5
            }}>
              <Label>{ item.title }</Label>
            </View>
            <View style={{marginTop:10}}>
              <Text>{item.body}</Text>
            </View>
          </Body>
        </CardItem>
        <CardItem style={{
          width:'100%',
          borderBottomRightRadius:5,
          borderBottomLeftRadius:5,
          justifyContent:'center'
        }}
        >
          <Left>
            <Text>{ Hooks.formatCurrency(item.price) }</Text>
          </Left>
          <Right>
            <View
              style={{
                borderWidth:1,
                borderRadius:10,
                width:100,
                height:40,
                flexDirection:'row'
              }}
            >
              <Item style={{width: 70, alignSelf:'flex-start',height:'100%', borderRightWidth:0.5 }}>
                <Input
                  value={item.qty.toString()}
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
                }}
                onPress={() => increase(index)}
                >
                  <Icon name="chevron-up-outline" style={{ color:'#000' }}/>
                </TouchableOpacity>
                <TouchableOpacity tyle={{
                  borderTopWidth:0.5
                }}
                onPress={() => decrease(index)}
                >
                  <Icon name="chevron-down-outline" style={{ color:'#000' }}/>
                </TouchableOpacity>
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
          {headerTitle()}
          <Content>
            <View style={{
              paddingLeft: 5,
              paddingRight: 5,
              marginTop:15
            }}>
              <FlatList
                data={items}
                // extraData={items}
                horizontal={false}
                horizontal={false}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
                onEndReachedThreshold={0.1}
                ListEmptyComponent={() => {
                  return (
                    <View style={{
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}>
                      <Text style={{
                        textAlign: 'center',
                        fontWeight: 'bold',
                        fontSize: 14,
                        paddingVertical: 20
                      }}>
                        No Data
                      </Text>
                    </View>
                  );
                }}
                renderItem={({ item, index }) => renderCard(item, index)}
              />
            </View>
          </Content>
          {buttonRender()}
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

export default Details;
