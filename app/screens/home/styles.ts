import { StyleSheet } from "react-native";
import { SCREEN_WIDTH } from "../../resources/config";
import { colors } from "../../resources/colors";

export const homePageStyles = () =>
  StyleSheet.create({
    homePageWrap: {
      flex: 1,
      backgroundColor: colors.black,
    },
    topPageGradientWrap: {
      position: "absolute",
      height: 91,
      top: 0,
      width: SCREEN_WIDTH,
    },
    allSectionsWrap: {
      paddingBottom: 100,
      rowGap: 40,
    },
    eachSectionWrap: {
      paddingHorizontal: 20,
      columnGap: 12,
    },
    eachSectionTitle: {
      color: colors.white,
      paddingHorizontal: 20,
      marginBottom: 20,
    },
  });
