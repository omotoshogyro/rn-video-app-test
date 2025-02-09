import React from "react";
import Svg, { Path } from "react-native-svg";

function HomeTabIcon({focused}: {focused: boolean}) {
  return (
    <Svg width={25} height={25} fill="none">
      <Path
        fill={focused ? "#F30745" : "#999"}
        fillRule="evenodd"
        d="M3.897 8.9a2 2 0 0 0-.772 1.578V20.5a2 2 0 0 0 2 2h4v-7a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v7h4a2 2 0 0 0 2-2V10.478a2 2 0 0 0-.772-1.579l-7-5.444a2 2 0 0 0-2.456 0l-7 5.444Z"
        clipRule="evenodd"
      />
    </Svg>
  );
}

export default HomeTabIcon;
