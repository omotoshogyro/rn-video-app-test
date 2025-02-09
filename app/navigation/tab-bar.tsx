import { Pressable, View, Text } from "react-native";
import React from "react";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { navigationBarStyles } from "./styles";

import {
  HomeTabIcon,
  ProfileTabIcon,
  RewardTabIcon,
  ShortsTabIcon,
} from "../assets/svg/tab-icons";
import { RnText } from "../design-systems";

export let TabIcon = (name: string, focused: boolean) => {
  switch (name) {
    case "home":
      return <HomeTabIcon focused={focused} />;
    case "shorts":
      return <ShortsTabIcon focused={focused} />;
    case "reward":
      return <RewardTabIcon focused={focused} />;
    case "profile":
      return <ProfileTabIcon focused={focused} />;

    default:
      break;
  }
};
export const TabBar = ({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) => {
  const { tabBarWrapper, eachTabBg, eachTabWrap } = navigationBarStyles();
  return (
    <View style={tabBarWrapper}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];

        const focused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!focused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <Pressable
            key={index}
            accessibilityRole="button"
            accessibilityState={focused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.title}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1 }}
            hitSlop={10}
          >
            <View style={eachTabWrap}>
              {TabIcon(route.name, focused)}
              <RnText
                size={12}
                style={{
                  color: focused ? "#F30745" : "#999999",
                  textTransform: "capitalize",
                }}
              >
                {route.name}
              </RnText>
            </View>
          </Pressable>
        );
      })}
    </View>
  );
};
