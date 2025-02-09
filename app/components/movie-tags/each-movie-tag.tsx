import { View } from "react-native";
import React from "react";
import { colors } from "../../resources/colors";
import { RnText } from "../../design-systems";
import { movieTagStyles } from "./styles";

const EachMovieTag = ({ tagTitle }: { tagTitle: string }) => {
  const { eachTagStyles } = movieTagStyles();
  return (
    <View style={eachTagStyles}>
      <RnText size={16} style={{ color: colors.white60 }}>
        {tagTitle}
      </RnText>
    </View>
  );
};

export default EachMovieTag;
