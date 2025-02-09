import { Animated, View } from "react-native";
import React from "react";
import { SCREEN_WIDTH } from "../../resources/config";
import { homePosterStyles } from "./styles";

import { VideoItem } from "../../hooks/api/use-get-all-videos";

const ScrollIndicator = ({
  data,
  scrollX,
}: {
  data: VideoItem[];
  scrollX: Animated.AnimatedValue;
}) => {
  const dotPosition = Animated.divide(scrollX, SCREEN_WIDTH);

  const { scrollIndicatorDot } = homePosterStyles();

  return (
    <View style={{ alignItems: "center", flexDirection: "row", columnGap: 8 }}>
      {data?.map((_, index) => {
        const dotWidth = dotPosition.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [6, 16, 6],
          extrapolate: "clamp",
        });
        const dotColor = dotPosition.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: ["#E0E0E0", "#F30745", "#E0E0E0"],
          extrapolate: "clamp",
        });

        return (
          <Animated.View
            key={index}
            style={[
              scrollIndicatorDot,
              {
                backgroundColor: dotColor,
                width: dotWidth,
              },
            ]}
          />
        );
      })}
    </View>
  );
};

export default ScrollIndicator;
