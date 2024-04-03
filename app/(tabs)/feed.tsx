import { View, ScrollView } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { Fab, VStack } from "@gluestack-ui/themed";
import { FontAwesome5 } from "@expo/vector-icons";
import SinglePostCard from "@/components/postCard";

const Feed = () => {
  const router = useRouter();
  return (
    <View
      style={{ flex: 1, justifyContent: "flex-start", alignItems: "center" }}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <VStack space="md" reversed={false} flex={1}>
          <SinglePostCard />
          <SinglePostCard />
          <SinglePostCard />
        </VStack>
      </ScrollView>

      <Fab
        size="lg"
        placement="bottom right"
        isHovered={false}
        onPress={() => {
          router.push("/new/post");
        }}
      >
        <FontAwesome5 name="plus"></FontAwesome5>
      </Fab>
    </View>
  );
};

export default Feed;
