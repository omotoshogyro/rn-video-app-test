import { View } from "react-native";
import React from "react";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../../resources/config";
import { ResizeMode, Video } from "expo-av";

const VideoReels = ({ data }: any) => {
  const { reelUrl } = data
  const VIEWABLE_HEIGHT = SCREEN_HEIGHT;


  return (
    <View
      style={{
        height: VIEWABLE_HEIGHT,
        backgroundColor: "white",
        paddingBottom: 100,
      }}
    >
      <Video
        source={{ uri: reelUrl }}
        posterStyle={{ resizeMode: "cover" }}
        shouldPlay={true}
        usePoster={true}
        isMuted={false}
        isLooping={false}
        resizeMode={ResizeMode.COVER}
        style={{ height: VIEWABLE_HEIGHT, width: SCREEN_WIDTH }}
      />
    </View>
  );
};

export default VideoReels;
