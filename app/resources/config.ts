import { Dimensions, PixelRatio, Platform } from "react-native";

const { height: screenHeight, width: screenWidth } = Dimensions.get("screen");


export const isAndroid = Platform.OS === "android";
export const isIOS = Platform.OS === "ios";



const frame = { height: 812, width: 375 }; // Frame according to figma design

function normalize(size: number, based = "width") {
  const newSize =
    based === "height"
      ? (size * screenHeight) / frame.height
      : (size * screenWidth) / frame.width;
  return newSize;
}

// for width  pixel
const widthPixel = (size: number) => normalize(size, "width");
// for height  pixel
const heightPixel = (size: number) => normalize(size, "height");
// for font  pixel
// const fontPixel = (size: number) => {
//   return widthPixel(size);
// };
const fontPixel = (size: number) => {
  const fontScale = PixelRatio.getFontScale();
  const calculatedSize = (size * screenWidth) / frame.width;
  return Math.max(10, calculatedSize * fontScale);
};

const heightPercentageToDP = (heightPercent: number) => {
  // Use PixelRatio.roundToNearestPixel method in order to round the layout
  // size (dp) to the nearest one that corresponds to an integer number of pixels.
  return PixelRatio.roundToNearestPixel((screenHeight * heightPercent) / 100);
};

const widthPercentageToDP = (widthPercent: number) => {
  // Use PixelRatio.roundToNearestPixel method in order to round the layout
  // size (dp) to the nearest one that corresponds to an integer number of pixels.
  return PixelRatio.roundToNearestPixel((screenWidth * widthPercent) / 100);
};

export {
  fontPixel as fs,
  screenHeight as SCREEN_HEIGHT,
  screenWidth as SCREEN_WIDTH,
  heightPixel as hp,
  widthPixel as wp,
  heightPercentageToDP as hpt,
  widthPercentageToDP as wpt,
};
