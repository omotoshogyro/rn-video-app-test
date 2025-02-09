import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import type { BottomTabParamList } from "./types";
import { TabBar } from "./tab-bar";
import { HomeScreen, ShortsScreen } from "../screens";


const DashboardTabs = createBottomTabNavigator<BottomTabParamList>();



export const DashboardTabNavigator = () => {
  return (
    <NavigationContainer>
      <DashboardTabs.Navigator
        tabBar={(props) => <TabBar {...props} />}
        screenOptions={({ route }) => ({
          headerShown: false,
        })}
        initialRouteName="home"
      >
        <DashboardTabs.Screen name="home" component={HomeScreen} />
        <DashboardTabs.Screen name="shorts" component={ShortsScreen} />
        <DashboardTabs.Screen name="reward" component={HomeScreen} />
        <DashboardTabs.Screen name="profile" component={HomeScreen} />
      </DashboardTabs.Navigator>
    </NavigationContainer>
  );
};
