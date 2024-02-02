import React, { 
  useState, 
  useEffect, 
  useReducer, 
  Fragment 
} from 'react';

import {
  StatusBar,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  Platform,
  View
} from 'react-native';

import {
  Body,
  Container,
  Header,
  Left,
  Right,
  Title,
} from 'native-base';

import { propTypes } from 'prop-types';

import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import StyleGlob from 'CourierKupesan/src/GlobalStyle';
import * as Hooks from 'CourierKupesan/src/Config/Helpers/Hooks';

import StopWatch from 'CourierKupesan/src/Components/StopWatch';

import ImageLoader from 'CourierKupesan/src/Config/Helpers/ImagesLoader';
const statusBarHeight = StatusBar.currentHeight;
const { width, height } = Dimensions.get('window');

const AppFrame = (props) =>{
  const {
    renderContent,
    headerStatus,
    headerLeft,
    headerRight,
    headerStyle,
    headerTimmer,
    headerTitle
  } = props;

  let headerButtonFlex = 0.15;
  const [textColor, settextColor] = useState('black');
  const [headerTitleFlex, setheaderTitleFlex] = useState(1);
  
  useEffect(() => {
    function changeHeaderTitleFlex(){
      setheaderTitleFlex(prevState => {
        let titleFlex = prevState.headerTitleFlex;
        if (headerLeft)
        titleFlex = titleFlex - headerButtonFlex;
        if (headerRight)
        titleFlex = titleFlex - headerButtonFlex;

        return { headerTitleFlex: titleFlex };
      });
    }
    changeHeaderTitleFlex();
  },[]);
  

  const renderAndroidHeader = () => {
    return (
      <Header
        transparent
        noShadow={true}
        style={[
          {
            //backgroundColor: 'transparent',
            shadowColor: 'black',
            justifyContent: 'flex-start',
            alignItems: 'flex-start'
          },
          headerStyle
        ]}
      >
        {/* <StatusBar
          animated={true}
          translucent={true}
          backgroundColor={'#FFCC34'}
          barStyle="dark-content"
        /> */}
        {
          headerLeft &&
          <Left>
            {headerLeft}
          </Left>
        }
        {
          headerTitle &&
          <Body style={{
            // flex: headerTitleFlex,
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Title style={{ color: textColor }}>{headerTitle}</Title>
          </Body>
        }
        {
          headerRight &&
          <Right>
            {headerRight}
          </Right>
        }
      </Header>
    );
  }

  const renderIOSHeader = () => {
    return (
      <View style={{
        paddingTop: Hooks.isIphoneXorAbove() ? 35 : 20,
        paddingBottom: 5,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        {/* <StatusBar
          animated={true}
          translucent={true}
          barStyle="dark-content"
        /> */}
        <View style={{
          flexDirection: 'row',
        }}>
          {
            headerLeft &&
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              {headerLeft}
            </View>
          }
          {
            headerTitle &&
            <View style={{
              flex: headerTitleFlex,
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <Title style={{ color:textColor }}>{headerTitle}</Title>
            </View>
          }
          {
            headerRight &&
            <View>
              {headerRight}
            </View>
          }
        </View>
      </View>
    );
  }

  const renderHeader = () => {
    return (
      <LinearGradient
        colors={['#FFF', 'rgba(255, 255, 255, 0.5)']}
        useAngle={true}
        angle={180}
        style={{
          width,
          zIndex: 100,
          justifyContent: 'center'
        }}
      >
        {/* {
          Platform.OS === 'ios' ?
            renderIOSHeader() :
            renderAndroidHeader()
        } */}
        {renderAndroidHeader()}
      </LinearGradient>
    );
  }

  const newRendrHeader = () =>{
    return(
      <Header 
        transparent 
        style={[
          {
            //backgroundColor: 'transparent',
            shadowColor: 'black',
            justifyContent: 'flex-start',
            alignItems: 'center'
          },
          headerStyle
        ]}
        >
          <View style={{width, flexDirection:'column'}}>
            <View style={{ width, paddingLeft:10}}>
              <Title 
                style={[StyleGlob.title4,{
                  color:'#FD9727',
                }]}
                allowFontScaling={false}
              >
                Pengantar<Title allowFontScaling={false} style={[StyleGlob.title4,{color:'#1EAAF1'}]}> Kupesan.id </Title>
              </Title>
            </View>
          </View>
      </Header>
    );
  }

  const renderTimmer = () =>{
    if(headerTimmer){
      return(
        <View style={{
          width,
          paddingLeft:10,
          // marginTop: Hooks.normalize(20),
          marginBottom:'-8%',
          marginTop: Hooks.normalize2(18, 'height'),
          // marginBottom:Hooks.normalize2(-10, 'height'),
          paddingRight:10,
          flexDirection:'row',
          justifyContent:'center',
          paddingTop:15,
          paddingBottom:15,
          backgroundColor:'red'
        }}>
          <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
            <Image
              fadeDuration={0}
              source={ImageLoader('stopwatch_icon')}
              style={[
                StyleGlob.xsImgBox,
                {
                  tintColor: 'white'
                }
              ]}
            />
            <StopWatch start={headerTimmer}
              options={{
                text:[StyleGlob.overline4,{color:'white', marginLeft:5}]
              }}
            />
            {/* <Text style={[StyleGlob.overline4,{color:'white', marginLeft:5}]}> 00:21:59 </ Text> */}
          </View>
        </View>
      )
    }
    return null;
  }

  return(
    <Container>
      <View style={{marginTop:10}}>
        {renderTimmer()}
      </View>
      { 
        headerStatus === true ? 
        renderHeader()
        :
        <>
          {newRendrHeader()}
          <View style={{width, height:1.2, backgroundColor:'#1EAAF1'}}/>
        </>
      }
      {renderContent}
    </Container>
  );
}

export default AppFrame;