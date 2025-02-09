import { View, FlatList, Animated } from "react-native";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { ResizeMode, Video } from "expo-av";
import ScrollIndicator from "./scroll-indicator";
import { DUMMY_REELS } from "../../mocks/dummy-reels";
import MovieTags from "../movie-tags";
import PlayButton from "../play-button";
import { homePosterStyles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { HomeTabScreenProp } from "../../navigation/types";
import { useIsFocused } from "@react-navigation/native";
import { useGetAllVideos } from "../../hooks";
import { generateViewableLink } from "../../utils/mutate-google-drive-link";


const HomePoster = () => {
  const { navigate } = useNavigation<HomeTabScreenProp>();
  const scrollX = useRef<any>(new Animated.Value(0)).current;
  const videoRef = useRef<Video>(null);
  const [viewIndex, setViewIndex] = useState<number>(0);
  const onViewChangeRef = useRef<
    ({ viewableItems }: { viewableItems: any }) => void
  >(({ viewableItems }) => {
    setViewIndex(viewableItems[0]?.index);
  });
  const { videos } = useGetAllVideos()
  let isScreenFocused = useIsFocused();

  const movieTags = ["New", "Detective", "Crime"];

  const { gradientWrap, imagePosterStyle, posterBottomWrap } =
    homePosterStyles();

  const [isPlaying, setIsPlaying] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.playAsync();
        setIsPlaying(true);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handlePlay = useCallback(async () => {
    const videoUri = DUMMY_REELS[viewIndex].reelUrl;
    if (videoRef.current) {
      const status = await videoRef.current.getStatusAsync();
      if (status.isLoaded) {
        navigate("shorts", {
          videoUri: videoUri,
          position: status.positionMillis,
        });
      } else {
        console.error("Video is yet to load");
      }
    }
  }, [viewIndex, navigate]);

  return (
    <View>
      <FlatList
        data={videos[0]?.videos}
        horizontal
        pagingEnabled
        bounces={false}
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewChangeRef.current}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        renderItem={({ item }) => {
          return (
            <View style={imagePosterStyle}>
              <Video
                ref={videoRef}
                source={{ uri: generateViewableLink(item.reelUrl) }}
                posterStyle={{ resizeMode: "cover" }}
                shouldPlay={isPlaying && isScreenFocused}
                usePoster={true}
                isMuted={true}
                isLooping={false}
                resizeMode={ResizeMode.COVER}
                style={imagePosterStyle}
              />
            </View>
          );
        }}
      />

      <LinearGradient
        colors={["transparent", "rgba(0, 0, 0, 0.52)", "#010101"]} // Same color for start and end
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={gradientWrap}
      >
        <View style={posterBottomWrap}>
          <View style={{ rowGap: 12 }}>
            <MovieTags tags={movieTags} />

            <PlayButton handlePlay={handlePlay} />
          </View>

          <ScrollIndicator data={videos[0]?.videos} scrollX={scrollX} />
        </View>
      </LinearGradient>
    </View>
  );
};

export default HomePoster;
