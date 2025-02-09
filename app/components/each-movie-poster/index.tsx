import { View } from "react-native";
import React from "react";
import { RnImage, RnText } from "../../design-systems";
import { colors } from "../../resources/colors";

const EachMoviePoster = ({
  posterUrl,
  type = "big",
}: {
  posterUrl: string;
  type: "small" | "big";
}) => {
  const isSmallPoster = type == "small";
  console.log(posterUrl, 'here is rhe')
  return (
    <View style={{ rowGap: 6 }}>
      <RnImage
        uri={posterUrl}
        width={isSmallPoster ? 116 : 146}
        height={isSmallPoster ? 177 : 220}
        bR={8}
      />

      <View style={{ rowGap: 4 }}>
        {!isSmallPoster && (
          <View style={{ flexDirection: "row", columnGap: 10 }}>
            <RnText
              size={11}
              style={{
                color: colors.white,
              }}
            >
              Detective
            </RnText>
            <RnText
              size={12}
              style={{
                color: colors.white,
              }}
            >
              DRAMA
            </RnText>
          </View>
        )}
        <RnText
          size={14}
          type="semibold"
          style={{
            color: colors.white,
          }}
        >
          Black Doves
        </RnText>
      </View>
    </View>
  );
};

export default EachMoviePoster;
