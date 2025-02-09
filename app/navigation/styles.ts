import { StyleSheet } from "react-native";
import { hp, SCREEN_WIDTH, wp } from "../resources/config";

export const navigationBarStyles = () =>
  StyleSheet.create({
    tabBarWrapper: {
      flex: 1,
      flexDirection: "row",
      position: "absolute",
      alignSelf: "center",
      backgroundColor: "#010101",
      justifyContent: "space-around",
      alignItems: "center",
      height: hp(100),
      bottom: 0,
      width: SCREEN_WIDTH,
      paddingBottom: hp(34),
    },
    eachTabWrap: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      rowGap: hp(4),
    },
    eachTabBg: {
      paddingHorizontal: wp(20),
      paddingVertical: hp(4),
      borderRadius: wp(16),
    },
  });
