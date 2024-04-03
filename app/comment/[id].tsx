import { View, ScrollView } from "react-native";
import React from "react";
import { VStack } from "@gluestack-ui/themed";
import SinglePostCard from "@/components/postCard";

const CommentDetailPage = () => {
  return (
    <View
      style={{ flex: 1, justifyContent: "flex-start", alignItems: "center" }}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <VStack space="md" reversed={false} flex={1}>
          <SinglePostCard />
        </VStack>
      </ScrollView>
    </View>
  );
};

export default CommentDetailPage;
