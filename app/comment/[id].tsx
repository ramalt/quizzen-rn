import { View, ScrollView } from "react-native";
import React from "react";
import { VStack, Box, HStack, Avatar, AvatarImage, Heading, Text, Pressable, Badge, BadgeText, Button, Divider, Image, Center } from "@gluestack-ui/themed";
import { FontAwesome5 } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const CommentDetailPage = () => {

  const router = useRouter();
  return (
    <View
      style={{ flex: 1, justifyContent: "flex-start", alignItems: "center" }}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <VStack space="md" reversed={false} flex={1}>
          <Box w="$96" paddingVertical="$1" marginVertical={5} borderRadius={15}>
            <Center>

              <VStack space="md">
                {/* HEADER */}
                <HStack space="md" alignItems="center" justifyContent="space-between">
                  <Box justifyContent="space-between" w="$80">
                    <HStack space="sm" alignItems="center">
                      <Avatar>
                        <AvatarImage
                          alt="username"
                          source="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                        ></AvatarImage>
                      </Avatar>
                      <Heading fontSize={15}>users name</Heading>
                      <Text fontSize={11}>@username</Text>
                    </HStack>
                  </Box>

                  <Text fontSize={10}>06:39 PM</Text>
                </HStack>

                {/* TEXT */}
                <Box w={"$96"}>
                  <Pressable
                    onPress={() => {
                    }}
                  >
                    <Text fontSize={14}>
                      its posts character conte its posts characterits posts character
                      its posts character its posts character its posts character nt.
                      200 character content. posts character its posts character its
                      posts character nt. 200 character content.
                    </Text>
                  </Pressable>
                </Box>

                {/* IMAGES */}
                <Center  >

                  <VStack space="xs" width="$96">
                    <Pressable onPress={() => router.push("/image")}>

                      <Image
                        size="2xl"
                        alt="none"
                        width={"%100"}
                        source={{
                          uri: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                        }}
                        resizeMode="contain"
                      />

                    </Pressable>
                    <Pressable onPress={() => router.push("/image")}>

                      <Image
                        size="2xl"
                        alt="none"
                        width={"%100"}
                        source={{
                          uri: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                        }}
                        resizeMode="contain"
                      />

                    </Pressable>
                  </VStack>

                </Center>

                {/* BUTTONS */}
                <Box w="$80" alignSelf="center">
                  <HStack space="sm" justifyContent="space-between">
                    <Button
                      size="sm"
                      variant="link"
                      action="primary"
                      isDisabled={false}
                      isFocusVisible={false}
                    >
                      <FontAwesome5 name="comment" size={15} />
                      {/* <Text fontSize={12}>4</Text> */}
                    </Button>
                    <Button
                      size="sm"
                      variant="link"
                      action="primary"
                      isDisabled={false}
                      isFocusVisible={false}
                    >
                      <FontAwesome5 name="heart" size={15} />
                      {/* <Text fontSize={12}>4</Text> */}
                    </Button>

                    <Button
                      size="sm"
                      variant="link"
                      action="primary"
                      isDisabled={false}
                      isFocusVisible={false}
                    >
                      <FontAwesome5 name="bookmark" size={15} />
                      {/* <Text fontSize={12}>4</Text> */}
                    </Button>

                    <Button
                      size="sm"
                      variant="link"
                      action="primary"
                      isDisabled={false}
                      isFocusVisible={false}
                    >
                      <FontAwesome5 name="share-alt" size={15} />
                      {/* <Text fontSize={12}>4</Text> */}
                    </Button>
                  </HStack>
                </Box>
              </VStack>
              <Divider my="$1" />
            </Center>
          </Box>
        </VStack>
      </ScrollView>
    </View>
  );
};

export default CommentDetailPage;
