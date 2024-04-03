import { View, Text } from "react-native";
import React from "react";
import LoginPage from "./login";

const index = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <LoginPage />
    </View>
  );
};

export default index;
