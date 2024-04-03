import { View, Text, Button } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

const LoginPage = () => {
  const router = useRouter();
  return (
    <View>
      <Button
        title="login"
        onPress={() => {
          router.replace("/(tabs)/feed");
        }}
      />
    </View>
  );
};

export default LoginPage;
