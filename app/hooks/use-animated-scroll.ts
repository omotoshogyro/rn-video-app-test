import { View, Text, Animated } from "react-native";
import React, { useRef } from "react";

const useAnimatedScroll = (
  startOffset = 0,
  endOffset = 20,
  initialValue = 1,
  finalValue = 0
) => {
  const scrollY = useRef(new Animated.Value(0)).current;


  let animatedValue = scrollY.interpolate({
    inputRange: [startOffset, endOffset],
    outputRange: [initialValue, finalValue],
    extrapolate: 'clamp'
  });

  const trackScroll = Animated.event(
    [
      {
        nativeEvent: {
          contentOffset: { y: scrollY },
        },
      },
    ],
    { useNativeDriver: true }
  );

  return { animatedValue, trackScroll, scrollY };
};

export default useAnimatedScroll;
