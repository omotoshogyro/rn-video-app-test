import { TouchableOpacity } from "react-native";
import React from "react";
import { PlayIcon } from "../../assets/svg";
import { RnText } from "../../design-systems";
import { colors } from "../../resources/colors";

const PlayButton = ({ handlePlay }: { handlePlay: () => void }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={handlePlay}
      style={{
        paddingVertical: 10,
        paddingHorizontal: 40,
        backgroundColor: colors.white90,
        alignSelf: "center",
        borderRadius: 8,
        flexDirection: "row",
        columnGap: 8,
        alignItems: "center",
      }}
    >
      <PlayIcon />
      <RnText size={17} type="bold">
        Play
      </RnText>
    </TouchableOpacity>
  );
};

export default PlayButton;
