'use strict';

import { StyleSheet } from 'react-native';
import { color } from './ColorList';
import { normalize } from 'CourierKupesan/src/Config/Helpers/Hooks';

const font = {
  weight: {
    ExtraBold: 'bold',
    Bold: '800',
    SemiBold: '700',
    Light: '400',
    Normal: '500'
  },
  style: {
    normal: 'normal',
    italic: 'italic'
  }
}

module.exports = StyleSheet.create({
  parentContainer: {
    backgroundColor: color.barColor
  },
  headerColor: {
    backgroundColor: color.barColor
	},
  headerTitle: {
    color: color.defaultColor,
    fontSize: normalize(20)
  },
  iconColor: {
    color: color.defaultColor
  },
	bodyColor: {
		backgroundColor: color.defaultColor
	},
  modalView: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    paddingTop: 5,
    height: '100%'
  },
  btnCloseModal: {
    marginLeft: 10,
    marginBottom: 5,
    fontSize: 25,
    color: "#ffffff",
    fontWeight: 'bold'
  },
  textInput: {
    backgroundColor: '#ffffff',
    width: '100%',
    height: 40,
    borderRadius: 50,
    paddingLeft: 7,
    paddingRight: 7
  },
  regularButton: {
    backgroundColor: color.accentColor,
    alignItems: 'center'
  },
  regularFab: {
    backgroundColor: color.accentColor1
  },
  regularFont: {
    fontSize: 14
  },
  h1Headline: { fontWeight: font.weight.Bold, fontSize: normalize(96) },
  h2Headline: { fontWeight: font.weight.Bold, fontSize: normalize(60) },
  h3Headline: { fontWeight: font.weight.Bold, fontSize: normalize(48) },
  h4Headline: { fontWeight: font.weight.Bold, fontSize: normalize(34) },
  h5Headline: { fontWeight: font.weight.Bold, fontSize: normalize(24) },
  h6Headline: { fontWeight: font.weight.Bold, fontSize: normalize(20) },

  subtitle1:  { fontWeight: font.weight.Normal, fontSize: normalize(16) },
  subtitle2:  { fontWeight: font.weight.SemiBold, fontSize: normalize(14) },
  subtitle3:  { fontWeight: font.weight.SemiBold, fontSize: normalize(10) },
  subtitle4:  { fontWeight: font.weight.SemiBold, fontSize: normalize(8) },
  subtitle5:  { fontWeight: font.weight.Bold, fontSize: normalize(10) },
  subtitle6:  { fontWeight: font.weight.Normal, fontSize: normalize(10) },

  body1:      { fontWeight: font.weight.SemiBold, fontSize: normalize(16) },
  body2:      { fontWeight: font.weight.SemiBold, fontSize: normalize(14) },

  button1:    { fontWeight: font.weight.ExtraBold, fontSize: normalize(16) },
  button2:    { fontWeight: font.weight.SemiBold, fontSize: normalize(14) },
  button3:    { fontWeight: font.weight.Bold, fontSize: normalize(12) },
  button4:    { fontWeight: font.weight.Bold, fontSize: normalize(14) },
  button5:    { fontWeight: font.weight.ExtraBold, fontSize: normalize(14) },

  caption:    { fontWeight: font.weight.Normal, fontSize: normalize(16) },
  caption1:   { fontWeight: font.weight.Normal, fontSize: normalize(12)},
  caption2:   { fontWeight: font.weight.Normal, fontSize: normalize(14)},
  caption3:   { fontWeight: font.weight.Normal, fontSize: normalize(18)},

  overline1:  { fontWeight: font.weight.ExtraBold, fontSize: normalize(16) },
  overline2:  { fontWeight: font.weight.SemiBold, fontSize: normalize(12) },
  overline3:  { fontWeight: font.weight.ExtraBold, fontSize: normalize(12) },
  overline4:  { fontWeight: font.weight.SemiBold, fontSize: normalize(14) },

  title1:     { fontWeight: font.weight.Bold, fontSize: normalize(16) },
  title2:     { fontWeight: font.weight.Bold, fontSize: normalize(14) },
  title3:     { fontWeight: font.weight.ExtraBold, fontSize: normalize(18) },
  title4:     { fontWeight: font.weight.SemiBold, fontSize: normalize(18) },
  title5:     { fontWeight: font.weight.Bold, fontSize: normalize(12) },
  title6:     { fontWeight: font.weight.Bold, fontSize: normalize(10) },
  title7:     { fontWeight: font.weight.SemiBold, fontSize: normalize(16) },
  title8:     { fontWeight: font.weight.ExtraBold, fontSize: normalize(14) },
  title9:     { fontWeight: font.weight.ExtraBold, fontSize: normalize(16) },
});
