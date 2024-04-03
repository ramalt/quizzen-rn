import { View, ScrollView } from "react-native";
import React from "react";
import { Fab, VStack } from "@gluestack-ui/themed";
import { FontAwesome5 } from "@expo/vector-icons";
import SinglePostCard from "@/components/postCard";
import CommentCard from "@/components/commentCard";

const PostDetailPage = () => {
  return (
    <View
      style={{ flex: 1, justifyContent: "flex-start", alignItems: "center" }}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <VStack space="md" reversed={false} flex={1}>
          <SinglePostCard />

          <CommentCard />
          <CommentCard />
          <CommentCard />
          <CommentCard />
          <CommentCard />
        </VStack>
      </ScrollView>

      <Fab
        size="lg"
        placement="bottom right"
        isHovered={false}
        onPress={() => {
          // router.push("/new");
        }}
      >
        <FontAwesome5 name="plus"></FontAwesome5>
      </Fab>
    </View>
  );
};

export default PostDetailPage;
