import StyleAndroid from './Style.android';
import StyleIos from './Style.ios';
import { Dimensions, StyleSheet, Platform } from 'react-native';
import { consoleLog, normalize } from 'CourierKupesan/src/Config/Helpers/Hooks';
// import { color as themeColor } from './ColorList';

const { width, height } = Dimensions.get('window');
const xxxsImg = 10;
const xxsImg = 16;
const xsImg = 22;
const sImg = 30;
const mImg = 48;
const lImg = 54;
const xlImg = 62;
const xxlImg = 72;
const xxxlImg = 82;

const Styles = StyleSheet.create({
  xxxsImgBox: {
    alignSelf: 'center',
    resizeMode: 'contain',
    width: normalize(xxxsImg),
    height: normalize(xxxsImg),
  },
  xxsImgBox: {
    alignSelf: 'center',
    resizeMode: 'contain',
    width: normalize(xxsImg),
    height: normalize(xxsImg),
  },
  xsImgBox: {
    alignSelf: 'center',
    resizeMode: 'contain',
    width: normalize(xsImg),
    height: normalize(xsImg),
  },
  sImgBox: {
    alignSelf: 'center',
    resizeMode: 'contain',
    width: normalize(sImg),
    height: normalize(sImg),
  },
  mImgBox: {
    alignSelf: 'center',
    resizeMode: 'contain',
    width: normalize(mImg),
    height: normalize(mImg),
  },
  lImgBox: {
    alignSelf: 'center',
    resizeMode: 'contain',
    width: normalize(lImg),
    height: normalize(lImg),
  },
  xlImgBox: {
    alignSelf: 'center',
    resizeMode: 'contain',
    width: normalize(xlImg),
    height: normalize(xlImg),
  },
  xxlImgBox: {
    alignSelf: 'center',
    resizeMode: 'contain',
    width: normalize(xxlImg),
    height: normalize(xxlImg),
  },
  xxxlImgBox: {
    alignSelf: 'center',
    resizeMode: 'contain',
    width: normalize(xxxlImg),
    height: normalize(xxxlImg),
  },
  xxxsImg: {
    alignSelf: 'center',
    resizeMode: 'contain',
    width: normalize(xxxsImg)
  },
  xxsmallImg: {
    alignSelf: 'center',
    resizeMode: 'center',
    width: normalize(xxsImg)
  },
  xsmallImg: {
    alignSelf: 'center',
    resizeMode: 'contain',
    width: normalize(xsImg),
  },
  smallImg: {
    alignSelf: 'center',
    resizeMode: 'contain',
    width: normalize(sImg)
  },
  mediumImg: {
    alignSelf: 'center',
    resizeMode: 'contain',
    width: normalize(mImg)
  },
  largeImg: {
    alignSelf: 'center',
    resizeMode: 'contain',
    width: normalize(lImg)
  },
  xlargeImg: {
    alignSelf: 'center',
    resizeMode: 'contain',
    width: normalize(120)
  },
  labelImg: {
    alignSelf: 'center',
    //color: themeColor.defaultColor
  },
  xsmallIcon: {
    alignSelf: 'center',
    //color: themeColor.defaultColor,
    width: normalize(30),
    height: normalize(30)
  },
  smallIcon: {
    alignSelf: 'center',
    //color: themeColor.defaultColor,
    width: normalize(30)
  },
  mediumIcon: {
    alignSelf: 'center',
    //color: themeColor.defaultColor,
    width: normalize(25)
  },
  largeIcon: {
    alignSelf: 'center',
    // color: themeColor.defaultColor,
    width: normalize(50)
  },
  defaultCard: {
    borderRadius: 5,
    shadowColor: 'transparent',
  },
  cardTitleView: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  centerFrame: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    width,
    //height:80,
    //maxHeight:90,
    zIndex: 100,
    position: 'absolute',
    justifyContent: 'center',
    backgroundColor: '#07265E'
  },
  headerTransparent: {
    backgroundColor: 'transparent',
    //height:(height*0.09),
    shadowColor: "#000"
  },
  boxShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  noShadow: {
    shadowOffset: {
      height: 0,
      width: 0
    },
    shadowOpacity: 0,
    elevation: 0
  },
});

module.exports = Object.assign(Styles, (Platform.OS == 'ios') ? StyleIos : StyleAndroid);
