import React from "react";
import { Stack } from "expo-router";
import { Button, GluestackUIProvider, Text } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import { FontAwesome5 } from "@expo/vector-icons";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const RootLayout = () => {
  return (
    <GluestackUIProvider config={config}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="login" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="new/post" options={{ headerShown: true, headerTitle: "Yeni Gönderi" }} />
        <Stack.Screen name="image" options={{ headerTintColor: "#fff", headerStyle: { backgroundColor: "black" } }} />
      </Stack>
    </GluestackUIProvider>
  );
};

export default RootLayout;
