import { StyleSheet } from "react-native";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../../resources/config";
import { colors } from "../../resources/colors";

export const homePosterStyles = () =>
  StyleSheet.create({
    imagePosterStyle: {
      width: SCREEN_WIDTH,
      height: SCREEN_HEIGHT - 3 * 100,
      backgroundColor: colors.accent,
    },
    gradientWrap: {
      width: SCREEN_WIDTH,
      height: 234,
      position: "absolute",
      bottom: 0,
      paddingHorizontal: 24,
      justifyContent: "flex-end",
      paddingBottom: 8,
    },
    topPageGradientWrap: {
      position: "absolute",
      height: 91,
      top: 0,
      width: SCREEN_WIDTH,
    },
    posterBottomWrap: {
      alignItems: "center",
      rowGap: 20,
    },
    scrollIndicatorDot: {
      height: 6,
      borderRadius: 6 / 2,
    },

  });
