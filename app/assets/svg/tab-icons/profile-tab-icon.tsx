import React from "react";
import Svg, { Path } from "react-native-svg";



const ProfileTabIcon = ({focused}: {focused: boolean}) => {
  return (
    <Svg width={25} height={25} fill="none">
      <Path
        stroke={focused ? "#F30745" : "#999"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M20.875 21.5v-2a4 4 0 0 0-4-4h-8a4 4 0 0 0-4 4v2M12.875 11.5a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
      />
    </Svg>
  );
};

export default ProfileTabIcon;
