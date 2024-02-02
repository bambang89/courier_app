import React, {Fragment, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Dimensions,
  Text,
  Image,
  TouchableOpacity,
  useColorScheme,
  View,
  FlatList,
} from 'react-native';

import { 
  Container, 
  Left,
  Body,
  Label,
  Header,
  Card,
  CardItem,
  Item, 
  Input, 
  Icon, 
  Content,
  Button
} from 'native-base';

import AppFrame from 'CourierKupesan/src/Components/AppFrame';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AppActions from 'CourierKupesan/src/Config/Storage/Actions';

const { width, height } = Dimensions.get('window');

const Home = (props) => {
  const {navigation} = props;

  const listItems = [
    {
      img:'http://bit.ly/2GfzooV',
      body: 'Testing',
      title: 'Solaria'
    },
    {
      img:'http://bit.ly/2GfzooV',
      body: 'Testing',
      title: 'HokBen'
    },
    {
      img:'http://bit.ly/2GfzooV',
      body: 'Testing',
      title: 'MC Donald'
    }
  ];

  const buttonSelect = ()=>{
    return(
       <TouchableOpacity 
        activeOpacity={0.5}
        style={{
          height: 40,
          width: (width * 0.9),
          backgroundColor: '#F5F5F5',
          borderColor: '#C4C4C4',
          borderWidth: 1,
          paddingLeft: 10,
          borderRadius: 5,
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
          flex: 0.1,
          height: 40,
          borderTopEndRadius: 5,
          borderBottomEndRadius: 5,
          backgroundColor: '#CBCBCB',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Icon name="caret-down-outline" size={10} color="#4F8EF7" />
        </View>
      </TouchableOpacity>
    );
  }

  const renderCard = (item, index) =>{
    return(
      <Card style={{
        width: width * 0.45,
        height: 230,
        borderRadius: 10,
        alignItems:'center',
      }} 
      >
        <CardItem style={{
          width:'100%',
          height:'100%',
          borderRadius: 10,
          justifyContent:'center'
        }}
          button onPress={() => navigation.navigate('Details')} 
        >
          <Body style={{alignItems:'center',}}>
            <Image 
              source={{uri: item.img}}
              style={{
                height: 100, 
                width: 100,
                borderRadius: 100
              }}
            />

            <View style={{ marginTop:20 }}> 
              <Label>
                {item.title}
              </Label>
            </View>

            <View style={{ marginTop:20, alignSelf:'flex-start' }}> 
              <Text>
                {item.body}
              </Text>
            </View>
          </Body>
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
        <Content>
          <View style={{ width, paddingTop: 10}}>
            <Text style={{ marginLeft: 10, marginBottom :10 }}> Lokasi Pengantaran : </Text>
            <View style={{
              justifyContent:'center',
              alignItems:'center'
            }}>
              {buttonSelect()}
            </View>
          </View>
          <Header 
            searchBar 
            rounded 
            transparent 
            style={{ paddingTop: -10 }}
          >
            <Item rounded>
              <Icon name="ios-search" />
              <Input placeholder="Search" />
              <Icon name="mic-circle-outline" />
            </Item>
            <Button transparent>
              <Text>Search</Text>
            </Button>
          </Header>

          <View style={{
            paddingLeft: 5,
            paddingRight: 5
          }}>
            <FlatList
              //extraData={this.state}
              data={listItems}
              horizontal={false}
              // showsVerticalScrollIndicator={false}
              numColumns={2}
              keyExtractor={(item, index) => index.toString()}
              columnWrapperStyle={{
                flex: 1,
                justifyContent:'space-between',
                marginTop:5
              }}
              //refreshing={this.state.refreshing}
              //onRefresh={() => this.refreshPage()}
              onEndReachedThreshold={0.1}
              //onEndReached={(info) => this.loadMoreList(info)}
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
        
      }
    />
  );
}

export default Home;
