

import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";



export type BottomTabParamList = {
  home: undefined;
  shorts: { videoUri: string; position: number,  };
  reward: undefined;
  profile: undefined;
};

export type HomeTabScreenProp = BottomTabNavigationProp<
  BottomTabParamList,
  "home"
>;
