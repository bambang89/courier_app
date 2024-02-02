import * as Hooks from './Hooks';
// import * as Session from 'AirMasApp1/src/Helpers/Session';

// import lang from './Language';
// import { createRequest, additional } from './Http';

import ImagePicker from 'react-native-image-crop-picker';
// import ImagePicker from 'react-native-customized-image-picker';
// import ImageResizer from 'react-native-image-resizer';

// import { color } from 'AirMasApp1/src/Helpers/Style/ColorList';
import { ActionSheet } from 'native-base';

// import base64ToArrayBuffer from 'AirMasApp1/src/Helpers/base64-arraybuffer';

const TAG = "Image Loader Lib";

// NOTE Please put image path inside imageList
const imageList = {
  avatar_icon   : require('../../Assets/Icon/avatar_icon.png'),
  basket_icon   : require('../../Assets/Icon/basket_icon.png'),
  block_icon    : require('../../Assets/Icon/block_icon.png'),
  camera_icon   : require('../../Assets/Icon/camera_icon.png'),
  date_icon     : require('../../Assets/Icon/date_icon.png'),
  message_icon  : require('../../Assets/Icon/message_icon.png'),
  office_icon   : require('../../Assets/Icon/office_icon.png'),
  pen_icon      : require('../../Assets/Icon/pen_icon.png'),
  point_icon    : require('../../Assets/Icon/point_icon.png'),
  remove_date_icon  : require('../../Assets/Icon/remove_date_icon.png'),
  stopwatch_icon  : require('../../Assets/Icon/stopwatch_icon.png'),
  store_icon      : require('../../Assets/Icon/store_icon.png'),
  target_icon     : require('../../Assets/Icon/target_icon.png'),
  comment         : require('../../Assets/Icon/comment.png'),
  time_icon       : require('../../Assets/Icon/time_icon.png'),
  checklist       : require('../../Assets/Icon/checklist.png')
};

function fetchObject(prop) {
  // split prop
  var _index = prop.indexOf('.');

  // prop split found
  if (_index > -1) {
    // re-execute this function to get property inside other property
    return fetchObject(prop.substr(_index + 1));
  }

  return imageList[prop];
}

export default function loader(index, default_type = 'profile') {
  let isHaveSlash = /\//.test(index);
  let isFullURL = /http/.test(index);

  if (!index || (isHaveSlash && !isFullURL)) {
    return fetchObject(`${default_type}_default`); // as Default Image
  } else if (isFullURL) {
    return { uri: index };
  } else {
    let imgValue = fetchObject(index);
    return imgValue;
  }
}

/**
 * Select & Upload Image
 * @param {Enum} type - single | multi
 * @param {Object} data - request data
 * @return {Promise}
 */
 export function selectImage(type = 'single', data = {}, mode = 'picker') {
  let pickerSource = [
    { text: 'Camera', icon: 'camera', iconColor: '#ea943b' },
    { text: 'Cancel', icon: 'close', iconColor: 'rgba(183, 28, 28, 0.87)' },
  ];
  let cancelButtonIndex = 1;
  let cameraButtonIndex = 0;
  // let galeryButtonIndex = 0;

  return new Promise((resolve, reject) => {
    let imagePickerOptions = {};
    switch (type) {
      case 'single':
        imagePickerOptions = {
          cropping: false,
          isWaterMark: true,
          address: Hooks.getFormatDate()
        }
        break;
      case 'multi':
        imagePickerOptions = { multiple: true }
        break;
      default:
        type = 'single';
        imagePickerOptions = {
          cropping: false,
          isWaterMark: true,
          address: Hooks.getFormatDate()
        }
        break;
    }
    // Select Source
    ActionSheet.show(
      {
        title: "Pilih Sumber Gambar",
        options: pickerSource,
        cancelButtonIndex,
      },
      buttonIndex => {
        if (buttonIndex === cameraButtonIndex) {
          Hooks.consoleLog("Open Camera");
          // Image Source from Camera
          // Open Image Picker
          ImagePicker.openCamera(imagePickerOptions).then((images) => {
            Hooks.consoleLog("Image Picked", images);
            resolve(images);
            // imageUploader(type, data, images).then((response) => {
            //   resolve(response);
            // }).catch((err) => {
            //   reject({ message: `Image Uploader Error: ${err.message}` });
            // });
          }).catch((err) => {
            resolve({ message: `Image Picker Error: ${err.message}` });
          });
        }
      }
    );
  });
}
