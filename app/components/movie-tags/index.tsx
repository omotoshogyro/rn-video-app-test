import { View } from "react-native";
import React from "react";
import EachMovieTag from "./each-movie-tag";
import { movieTagStyles } from "./styles";

const MovieTags = ({ tags }: { tags: string[] }) => {
  const { movieTagsWrap } = movieTagStyles();
  return (
    <View style={movieTagsWrap}>
      {tags.map((tag, index) => {
        return <EachMovieTag key={`${index}-${tag}`} tagTitle={tag} />;
      })}
    </View>
  );
};

export default MovieTags;
