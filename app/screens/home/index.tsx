import { View, FlatList } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { EachMoviePoster, HomePoster } from "../../components";
import { RnText } from "../../design-systems";
import { homePageStyles } from "./styles";
import { useGetAllMoviesCategory, useGetAllVideos } from "../../hooks";

const HomeScreen = () => {
  const {
    topPageGradientWrap,
    homePageWrap,
    allSectionsWrap,
    eachSectionWrap,
    eachSectionTitle,
  } = homePageStyles();

  const { categories } = useGetAllMoviesCategory();
  const  { videos} = useGetAllVideos()



  console.log(JSON.stringify(videos, null, 2), "here are the videos")

  return (
    <View style={homePageWrap}>
      <FlatList
        data={categories}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={HomePoster}
        contentContainerStyle={allSectionsWrap}
        renderItem={({ item, index }) => {
          const { title, movieData } = item;
          const isFirstSet = index == 0;

          return (
            <View>
              <RnText size={21} type="semibold" style={eachSectionTitle}>
                {title}
              </RnText>
              <FlatList
                data={movieData}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={eachSectionWrap}
                renderItem={({ item }) => (
                  <EachMoviePoster
                    posterUrl={item}
                    type={isFirstSet ? "small" : "big"}
                  />
                )}
              />
            </View>
          );
        }}
      />

      <LinearGradient
        colors={["#000", "rgba(0, 0, 0, 0.42)", "transparent"]}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={topPageGradientWrap}
      />
    </View>
  );
};

export default HomeScreen;
