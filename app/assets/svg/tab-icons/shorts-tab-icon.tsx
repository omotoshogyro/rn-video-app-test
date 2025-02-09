import React from "react";
import Svg, { G, Rect, Path, Defs, ClipPath } from "react-native-svg";

const ShortsTabIcon = ({focused}: {focused: boolean}) => {
  return (
    <Svg width={25} height={25} fill="none">
      <G stroke={focused ? "#F30745" : "#999"} strokeWidth={2} clipPath="url(#a)">
        <Rect width={14} height={20} x={5.375} y={2.5} rx={2} />
        <Path d="M2.875 4.5a1.5 1.5 0 0 0-1.5 1.5v13a1.5 1.5 0 0 0 1.5 1.5M21.875 4.5a1.5 1.5 0 0 1 1.5 1.5v13a1.5 1.5 0 0 1-1.5 1.5" />
        <Path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.875 10.241a1 1 0 0 1 1.504-.864l3.015 1.76a1 1 0 0 1 0 1.727l-3.015 1.759a1 1 0 0 1-1.504-.864v-3.518Z"
        />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path fill="#fff" d="M.375.5h24v24h-24z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default ShortsTabIcon;
