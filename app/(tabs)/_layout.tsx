import React from "react";
import { Tabs } from "expo-router";
import { FontAwesome5 } from "@expo/vector-icons";

const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="feed"
        options={{
          tabBarShowLabel: false,
          headerTitle: "Home",
          headerShown: true,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="home" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          tabBarShowLabel: false,
          headerTitle: "profile",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="user" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
