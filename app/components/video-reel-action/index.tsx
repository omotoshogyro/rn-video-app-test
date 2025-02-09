import { View, Text } from "react-native";
import React from "react";
import { BookMarkIcon, LikeIcon, ShareIcon } from "../../assets/svg";
import { RnText } from "../../design-systems";
import { colors } from "../../resources/colors";

const VideoRealAction = ({
  type,
  value,
}: {
  type: "like" | "bookmark" | "share";
  value: string;
}) => {

    const icons = {like: <LikeIcon />, bookmark: <BookMarkIcon/>, share: <ShareIcon />}

  return (
    <View style={{alignItems: "center"}}>
      {icons[type]}
      <RnText size={12} type="semibold" style={{color: colors.white}}>
        {value}
      </RnText>
    </View>
  );
};

export default VideoRealAction;
