'use strict';
/* @flow */

/**
 *
 * This helper checks which iphone model is being used by checking the device
 * height and width.
 * It returns the model number (with 7 and 8 for 6+ and ipad respectively).
 * It also returns 'scale', which is the ratio of the device screen height
 * relative to iphone 6.
**/

import { Dimensions } from 'react-native';
const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
let scale, model, width, fontScale;

const iSiPhone4 = screenWidth === 320 && screenHeight == 480;
const iSiPhone5 = screenWidth === 320 && screenHeight == 568;
const iSiPhone6 = screenWidth === 375 && screenHeight == 667;
const iSiPhone6Plus = screenWidth === 414 && screenHeight == 736;
const iSiPad = screenWidth === 768 && screenHeight == 1024;

if (iSiPhone4) {
  scale = 0.719,
  width = 0.853,
  model = 4,
  fontScale = 0.9;
}

if (iSiPhone5) {
  scale = 0.851,
  width = 0.853,
  model = 5,
  fontScale = 0.9;
}

if (iSiPhone6) {
  scale = 1,
  width = 1,
  model = 6,
  fontScale = 1;
}

if (iSiPhone6Plus) {
  scale = 1.103,
  width = 1.104,
  model = 7,
  fontScale = 1.05;
}

if (iSiPad) {
  scale = 1.535,
  width = 2.048,
  model = 8,
  fontScale = 1.05;
}

export default {
  scale,
  width,
  model,
  screenHeight,
  screenWidth,
  fontScale,
};