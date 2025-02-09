import { StyleSheet } from "react-native";
import { colors } from "../../resources/colors";

export const movieTagStyles = () =>
  StyleSheet.create({
    movieTagsWrap: {
      flexDirection: "row",
      columnGap: 8,
    },
    eachTagStyles: {
      borderWidth: 1,
      borderColor: colors.white30,
      paddingVertical: 4,
      paddingHorizontal: 8,
      borderRadius: 8,
    },
  });
