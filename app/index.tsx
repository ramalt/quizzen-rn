import { View, Text } from "react-native";
import React from "react";
import LoginPage from "./login";
import Feed from "./(tabs)/feed";

const index = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <LoginPage />
    </View>
  );
};

export default index;
