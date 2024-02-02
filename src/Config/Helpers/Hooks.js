/**
 * Use this Helper to create your own custom functions
 */
import moment from 'moment';
import { Alert, Dimensions, Platform, PixelRatio } from 'react-native';
 
const {
  Version,
  OS,
} = Platform;

export var { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

const wscale: number = SCREEN_WIDTH / 375;
const hscale: number = SCREEN_HEIGHT / 667;

const pixelRatio = PixelRatio.get();
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
export const screenRatio = deviceHeight / deviceWidth;

export const IS_ANDROID = OS === 'android';
export const IS_LT_LOLLIPOP = Version < 21;
export const noop = () => {};

export function consoleLog(TAG: String, message: String, force: Boolean = false) {
    if (__DEV__ || force === true) { // if in Development mode
        console.log("###" + TAG + " => ", message);
    }
}
export function consoleError(TAG: String, message: String, force: Boolean = false) {
    if (__DEV__ || force === true) { // if in Development mode
        console.error("###" + TAG + " => ", message);
    }
}

/**
 * Format Currency
 * @param {Float/Int} price - contains number to be fomatted
 * @param {String} currency - currency, default is IDR
 * @param {Int} dec_digit - amount of decimal digit
 * @return {String} - Result of formatted currency
 */
export function formatCurrency(price, currency = 'IDR', dec_digit = 0) {
  let dec_sep;
  let th_sep;
  let currency_symbol;

  switch (currency) {
    case 'IDR':
      currency_symbol = 'Rp ';
      dec_sep = ',';
      th_sep = '.';
      break;
    case 'USD':
      currency_symbol = '$';
      dec_sep = '.';
      th_sep = ',';
      break;
    default:
      currency_symbol = (currency) ? currency + " " : '';
      dec_sep = ',';
      th_sep = '.';
      break;
  }

  let n = price,
    c = dec_digit,
    d = dec_sep,
    t = th_sep,
    s = n < 0 ? "-" : "",
    i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c))),
    j = (j = i.length) > 3 ? j % 3 : 0;

  return currency_symbol + s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - parseInt(i)).toFixed(c).slice(2) : "");
}


export function normalize(size) {
  if (pixelRatio >= 2 && pixelRatio < 3) {
    // iphone 5s and older Androids
    if (deviceWidth < 360) {
      return size * 0.95;
    }

    // iphone 5
    if (deviceHeight < 667) {
      return size;
      // iphone 6-6s
    }

    if (deviceHeight >= 667 && deviceHeight <= 735) {
      return size * 1.15;
    }
    // older phablets
    return size * 1.25;
  }

  if (pixelRatio >= 3 && pixelRatio < 3.5) {
    // catch Android font scaling on small machines
    // where pixel ratio / font scale ratio => 3:3
    if (deviceWidth <= 360) {
      return size;
    }

    // Catch other weird android width sizings
    if (deviceHeight < 667) {
      return size * 1.15;
      // catch in-between size Androids and scale font up
      // a tad but not too much
    }

    if (deviceHeight >= 667 && deviceHeight <= 735) {
      return size * 1.2;
    }

    // catch larger devices
    // ie iphone 6s plus / 7 plus / mi note 等等
    return size * 1.27;
  }

  if (pixelRatio >= 3.5) {
    // catch Android font scaling on small machines
    // where pixel ratio / font scale ratio => 3:3
    if (deviceWidth <= 360) {
      return size;
      // Catch other smaller android height sizings
    }

    if (deviceHeight < 667) {
      return size * 1.2;
      // catch in-between size Androids and scale font up
      // a tad but not too much
    }

    if (deviceHeight >= 667 && deviceHeight <= 735) {
      return size * 1.25;
    }

    // catch larger phablet devices
    return size * 1.4;
  }

  return size;
}

export function normalize2( size: number, based: 'width' | 'height' = 'width'){
  const newSize = based === 'height' ? size * hscale : size * wscale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
}

/**
 * Get & Formatting date
 *
 * @param {Object/String} date - contain JS Date Object, or formatted date string
 * @param {Boolean} time - wants to display time?
 * @param {String} - Date output format, using format like php
 *
 * @return {String} Formatted date
 */
 export function getFormatDate(date = [], time = true, getDate = true, output_format = 'Y-m-d') {
  // Convert to JS Date Object
  if (!date)
    date = moment().toDate();
  else
    date = moment(date).toDate();

  let year = date.getFullYear(),
    month = '' + (date.getMonth() + 1),
    day = '' + date.getDate(),
    hour = '' + date.getHours(),
    second = '' + date.getSeconds(),
    minute = '' + date.getMinutes();

  // Reformat to 2 digits
  month = (month.length < 2) ? '0' + month : month;
  day = (day.length < 2) ? '0' + day : day;
  hour = (hour.length < 2) ? '0' + hour : hour;
  minute = (minute.length < 2) ? '0' + minute : minute;
  second = (second.length < 2) ? '0' + second : second;

  // Formatting Date
  let dateArray = [];
  let dateSeparator = '-';
  let splitdate = output_format.split(/[^a-z]/gi);
  if (splitdate.length < 3) {
    return 'invalid format';
  }

  let get_separator = output_format.split(/[\w]/gi);

  for (var i = 0; i < splitdate.length; i++) {
    if (splitdate[i] == 'Y' || splitdate[i] == 'y') {
      dateArray.push(year);
    } else if (splitdate[i] == 'M' || splitdate[i] == 'm' || splitdate[i] == 'f' || splitdate[i] == 'F') {
      switch (splitdate[i]) {
        case 'M':
          month = lang('month_short.' + month);
          break;
        case 'f':
          month = lang('month_long.' + month);
          break;
        case 'F':
          month = lang('month_long.' + month);
          break;
      }

      dateArray.push(month);
    } else if (splitdate[i] == 'D' || splitdate[i] == 'd') {
      dateArray.push(day);
    }
  }

  let newDateSeparator = get_separator.filter(String);
  if (newDateSeparator.length > 0) {
    dateSeparator = newDateSeparator[0];
  }

  let newdatetime = dateArray.join(dateSeparator);
  if (time !== false) {
    newdatetime += ' ' + [hour, minute, second].join(':');
  }

  if (getDate === false) {

    let fullTime = [hour, minute, second].join(':');

    return fullTime;

  } else {

    return newdatetime;
  }

}
  
export function formatTimeString(time, showMsecs) {
  let msecs = time % 1000;

  if (msecs < 10) {
    msecs = `00${msecs}`;
  } else if (msecs < 100) {
    msecs = `0${msecs}`;
  }

  let seconds = Math.floor(time / 1000);
  let minutes = Math.floor(time / 60000);
  let hours = Math.floor(time / 3600000);
  seconds = seconds - minutes * 60;
  minutes = minutes - hours * 60;
  let formatted;
  if (showMsecs) {
    formatted = `${hours < 10 ? 0 : ""}${hours}:${
      minutes < 10 ? 0 : ""
    }${minutes}:${seconds < 10 ? 0 : ""}${seconds}:${msecs}`;
  } else {
    formatted = `${hours < 10 ? 0 : ""}${hours}:${
      minutes < 10 ? 0 : ""
    }${minutes}:${seconds < 10 ? 0 : ""}${seconds}`;
  }

  return formatted;
}