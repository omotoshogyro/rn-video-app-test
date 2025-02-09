import { StatusBar } from "expo-status-bar";
import { LogBox, StyleSheet, Text } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { DashboardTabNavigator } from "./app/navigation";


SplashScreen.preventAutoHideAsync();
export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_Regular: require("./app/assets/fonts/Inter-Regular.otf"),
    Inter_Medium: require("./app/assets/fonts/Inter-Medium.otf"),
    Inter_Semibold: require("./app/assets/fonts/Inter-SemiBold.otf"),
    Inter_Bold: require("./app/assets/fonts/Inter-Bold.otf"),
  });

  LogBox.ignoreAllLogs();
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <GestureHandlerRootView style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <SafeAreaProvider>
        <DashboardTabNavigator />
        <StatusBar style="auto" />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
