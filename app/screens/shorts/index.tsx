import { Animated, View, FlatList, ViewToken, Pressable } from "react-native";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../../resources/config";
import { VideoRealAction, VideoReels } from "../../components";
import { DUMMY_REELS } from "../../mocks/dummy-reels";
import { ResizeMode, Video } from "expo-av";
import useVideoPlayer from "../../hooks/use-video-player";
import { ReeelsPlayIcon } from "../../assets/svg";
import { useGetAllVideos } from "../../hooks";
import { generateViewableLink } from "../../utils/mutate-google-drive-link";



type VideoItem = {
  id: string;
  reelUrl: string;
};

const ShortsScreen = ({ route }: any) => {
  const flatListRef = useRef(null);
  const videoRef = useRef<Video>(null);
  // const { videoUri, position } = route.params;
  const VIEWABLE_HEIGHT = SCREEN_HEIGHT - 10;
  const {
    currentVideoId,
    registerVideoRef,
    playVideo,
    pauseVideo,
    unloadVideo,
  } = useVideoPlayer();
  const [status, setStatus] = useState({});
  const [isPlaying, setIsPlaying] = useState(false);
  const { videos} = useGetAllVideos()



    //NOTE(Okikiola): Will revert back to this if therer is enough time
  // const { trackScroll, animatedValue } = useAnimatedScroll(
  //   VIEWABLE_HEIGHT * startIndex,
  //   VIEWABLE_HEIGHT * (startIndex + 1),
  //   1,
  //   0.2
  // );

  const renderVideoReels = useCallback(
    ({ item, index }: any) => {
      return (
        <Pressable
          onPress={() => {
            setIsPlaying(!isPlaying);
            if (isPlaying) {
              pauseVideo(item.id);
            } else {
              playVideo(item.id);
            }
          }}
          style={{
            height: VIEWABLE_HEIGHT,
            backgroundColor: "white",
          }}
        >
          <Video
            ref={(ref) => registerVideoRef(item.id, ref)}
            source={{ uri: generateViewableLink(item.reelUrl) }}
            posterStyle={{ resizeMode: "cover" }}
            usePoster={true}
            isMuted={false}
            isLooping={true}
            resizeMode={ResizeMode.COVER}
            shouldPlay={currentVideoId === item.id}
            onPlaybackStatusUpdate={(status) => setStatus(() => status)}
            style={{
              height: SCREEN_HEIGHT,
              width: SCREEN_WIDTH,
            }}
          />

          <View style={{position: "absolute", right: 20, bottom: 100, rowGap: 20, paddingHorizontal: 12}}>
            <VideoRealAction type="like" value="11.5K" />
            <VideoRealAction type="bookmark" value="312" />
            <VideoRealAction type="share" value="20" />

          </View>

          {!isPlaying && (
            <View
              style={{
                position: "absolute",
                top: SCREEN_HEIGHT / 2.3,
                left: SCREEN_WIDTH / 2.3,
                zIndex: 1,
              }}
            >
              <ReeelsPlayIcon />
            </View>
          )}
        </Pressable>
      );
    },
    [currentVideoId]
  );

  const onViewableItemsChanged = useCallback(
    ({ viewableItems }: { viewableItems: { item: VideoItem }[] }) => {
      if (viewableItems.length > 0) {
        const visibleItem = viewableItems[0].item;
        playVideo(visibleItem.id);
      } else if (currentVideoId) {
        pauseVideo(currentVideoId);
        unloadVideo(currentVideoId);
      }
      setIsPlaying(true)
    },
    [currentVideoId]
  );

  return (
    <Animated.FlatList
      ref={flatListRef}
      data={videos[0]?.videos}
      pagingEnabled
      onViewableItemsChanged={onViewableItemsChanged}
      viewabilityConfig={{ itemVisiblePercentThreshold: 50 }}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ gap: 2, backgroundColor: "green" }}
      snapToAlignment="start"
      decelerationRate="fast"
      renderItem={renderVideoReels}
    />
  );
};

export default ShortsScreen;
