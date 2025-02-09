import React from "react";
import Svg, { Path } from "react-native-svg";

const RewardTabIcon = ({focused}: {focused: boolean}) => {
  return (
    <Svg width={25} height={25} fill="none">
      <Path
        stroke={focused ? "#F30745" : "#999"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M20.625 12.5v10h-16v-10M22.625 7.5h-20v5h20v-5ZM12.625 22.5v-15M12.625 7.5h-4.5a2.5 2.5 0 1 1 0-5c3.5 0 4.5 5 4.5 5ZM12.625 7.5h4.5a2.5 2.5 0 0 0 0-5c-3.5 0-4.5 5-4.5 5Z"
      />
    </Svg>
  );
};

export default RewardTabIcon;
