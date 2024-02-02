/**
 * Session Library
 */
// import { AsyncStorage } from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';
import * as Hooks from 'CourierKupesan/src/Config/Helpers/Hooks';

const TAG = 'Session Helper';
/**
 * Session Keys
 */
/**
 * Session store variables for User Profile
 */
export const IS_LOGIN = "IsLoggedIn";
export const API_TOKEN = "ApiToken";
export const USER_ID = "UserID";
export const USER_NAME = "UserName";
export const USER_PIC = "UserPic";
export const USER_EMAIL = "UserEmail";
export const FULL_NAME = "FullName";
export const FACE_ID = "FaceId";
export const USER_STATUS = "UserStatus";
export const POSITION = "Position";
export const NIK = "Nik";
export const TYPE_CLIENT = "TypeClient";
export const COMPANY_ID = "IdCompany";

export const CLOCK_IN = "Clock_in";
export const DAY_FACEID_CHECK = "Day_check_faceid";
export const DATE_CLOCK_IN = "DateClockIn";
export const ARRIVE_IN = "Arrive_in";
export const DATE_ARRIVE_IN = "DateArriveIn";
export const DATE_BREAK_IN = "DateBreakIn";
export const DATE_OVERTIME_START = "DateOverTimeStart";

export const REG_FCM = "REG_FCM";
export const FCM_TOKEN = "FcmToken";
export const NOTIFICATION_MODE = "NotificationMode";

export const DATA_COVID = "DataCovid";
export const APPROVAL_BADGE_COUNT = "ApprovalBadgeCount";
export const APPROVAL_OVERTIME_BADGE_COUNT = "ApprovalBadgeCount";
export const PROFILE_DATA = "ProfileData";
export const IMAGE_SPLASH = "ImageSplashScreen";

export const ID_DIVISION = "Division";
export const ID_BRANCH = "Branch";
export const ID_GRADE = "Grade";
export const GRADE_NAME = "Grade Name";
export const PERMISSION_TYPE = "Permission Type";
export const INTRODUCTION = "Introduction";

export const PERMISSION_APP = "Permission Menu App";
export const NOTIF_SETTING = "Notif Setting";
export const NOTIF_MENU_SETTING = "Notif Menu Setting";

/**
 * Session store variables for Other
 */
export const APP_VERSION = "AppVersion";
export const LANG = "Language";

let DATA_SESSION = {};
const SESSION_KEY = '@Session'; // ini sebagai penanda di Asyncstorage bahwa ini adalah variabel untuk session

/**
 * Set Session value by key
 *
 * @param {String} key - Session key to set
 * @param {Any} value - Value of session key
 *
 * @return {Boolean}
 */
export function setValue(key, value) {
  try {
    if (!DATA_SESSION) {
      DATA_SESSION = {};
    }

    DATA_SESSION[key] = value;

    let sessionData = JSON.stringify(DATA_SESSION);
    // Hooks.consoleLog(TAG + ' setValue', 'Key: ' + key, 'Value: ' + value);
    AsyncStorage.setItem(SESSION_KEY, sessionData);
    return true;
  } catch (error) {
    Hooks.consoleLog(TAG + ' setValue Error', error);
    return false;
  }
}

/**
 * Get Session Value based on key
 *
 * @param {String} key - Session Key to get
 * @param {Any} default_value (optional) - return value if the session key is undefined
 *
 * @return {Any} Value of Session key
 */
export function getValue(key, default_value = '') {
  try {
    let value = DATA_SESSION[key];
    // Hooks.consoleLog(TAG + ' getValue', 'Key: ' + SESSION_KEY+key, 'Value: ' + value);
    return value || default_value;
  } catch (e) {
    return default_value;
  }
}

/**
 * @void Destroy Session
 */
export function destroy() {
  DATA_SESSION = {};
  AsyncStorage.removeItem(SESSION_KEY);
}

/**
 * Prepare Session Data
 * @return {Promise}
 */
export function prepare() {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem(SESSION_KEY).then((value) => {
      DATA_SESSION = JSON.parse(value);
      Hooks.consoleLog(`${TAG} prepare`, DATA_SESSION);
      resolve(DATA_SESSION);
    }).catch((err) => {
      Hooks.consoleLog(`${TAG} prepare Error`, err);
      reject(err);
    });
  });
}
