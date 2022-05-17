import {Dimensions} from 'react-native';

export const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} =
  Dimensions.get('window');

// based on iphone x scale
const ScaleHeight: number = SCREEN_HEIGHT / 812;
const ScaleWidth: number = SCREEN_WIDTH / 375;

export const normalizeFont = (size: number): number =>
  Math.round(size * ScaleWidth);

export const scaleHeight = (height: number): number =>
  Math.round(height * ScaleWidth);

export const scaleWidth = (width: number): number =>
  Math.round(width * ScaleWidth);
