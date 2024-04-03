import { View, Text, Pressable } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import {
  Box,
  FormControl,
  FormControlError,
  FormControlErrorIcon,
  AlertCircleIcon,
  FormControlErrorText,
  Center,
  Textarea,
  TextareaInput,
  Select,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicator,
  SelectDragIndicatorWrapper,
  SelectInput,
  SelectItem,
  SelectPortal,
  SelectTrigger,
  VStack,
  Divider,
  HStack,
  ScrollView,
  Input,
  InputField,
} from "@gluestack-ui/themed";
import { FontAwesome5 } from "@expo/vector-icons";

const NewPostPage = () => {
  const router = useRouter();
  return (
    <View
      style={{ flex: 1, justifyContent: "flex-start", alignItems: "center" }}
    >
      <Box
        bgColor="$secondary"
        w="$96"
        paddingVertical="$1"
        marginVertical={5}
        borderRadius={25}
      >
        <Center>
          <FormControl
            size="lg"
            isDisabled={false}
            isInvalid={false}
            isReadOnly={false}
            isRequired={true}
          >
            {/* <FormControlLabel mb="$1">
              <FormControlLabelText>Password</FormControlLabelText>
            </FormControlLabel> */}

            <Textarea
              size="md"
              isReadOnly={false}
              isInvalid={false}
              isDisabled={false}
              isFocused={true}
              w="$80"
              style={{ borderWidth: 0 }}
            >
              <TextareaInput placeholder="Sorun nedir?" />
            </Textarea>
            <HStack>
              <Box
                w="$20"
                h="$20"
                borderRadius={15}
                borderColor="$gray100"
                bgColor="$green100"
              >
                <Text>device images here</Text>
              </Box>
              <Box
                w="$20"
                h="$20"
                borderRadius={15}
                borderColor="$gray100"
                bgColor="$green100"
              >
                <Text>device images here</Text>
              </Box>
            </HStack>

            <FormControlError>
              <FormControlErrorIcon as={AlertCircleIcon} />
              <FormControlErrorText>
                At least 6 characters are required.
              </FormControlErrorText>
            </FormControlError>
          </FormControl>

          <Divider my="$1" />

          {/* DERS KONU FOTO SEÇİMİ */}
          <Box w="$80">
            <VStack>
              <Select>
                <SelectTrigger variant="outline" size="md">
                  <SelectInput placeholder="Ders Seçiniz" />
                  {/* <SelectIcon mr="$3">
                <Icon as={ChevronDownIcon} />
              </SelectIcon> */}
                  <FontAwesome5 name="sort-down" />
                </SelectTrigger>
                <SelectPortal>
                  <SelectBackdrop />
                  <SelectContent minHeight="$96">
                    <SelectDragIndicatorWrapper>
                      <SelectDragIndicator />
                    </SelectDragIndicatorWrapper>

                    <Input
                      variant="outline"
                      size="lg"
                      isDisabled={false}
                      isInvalid={false}
                      isReadOnly={false}
                    >
                      <InputField placeholder="Enter Text here" />
                    </Input>

                    <Divider my="$1" />

                    <SelectItem label="Backend Development" value="backend" />
                    <SelectItem label="Backend Development" value="backend" />
                  </SelectContent>
                </SelectPortal>
              </Select>

              <Select isDisabled={true}>
                <SelectTrigger variant="outline" size="md">
                  <SelectInput placeholder="Ders Seçiniz" />
                  {/* <SelectIcon mr="$3">
                <Icon as={ChevronDownIcon} />
              </SelectIcon> */}
                  <FontAwesome5 name="sort-down" />
                </SelectTrigger>
                <SelectPortal>
                  <SelectBackdrop />
                  <SelectContent minHeight="$96">
                    <SelectDragIndicatorWrapper>
                      <SelectDragIndicator />
                    </SelectDragIndicatorWrapper>

                    <Input
                      variant="outline"
                      size="lg"
                      isDisabled={false}
                      isInvalid={false}
                      isReadOnly={false}
                    >
                      <InputField placeholder="Enter Text here" />
                    </Input>

                    <Divider my="$1" />

                    <SelectItem label="Backend Development" value="backend" />
                    <SelectItem label="Backend Development" value="backend" />
                  </SelectContent>
                </SelectPortal>
              </Select>

              <Divider my="$1" />

              <Box>
                <HStack space="md">
                  <Pressable
                    onPress={() => {
                    //   router.push("/camera");
                    }}
                  >
                    <Box
                      w="$20"
                      h="$20"
                      bg="$blue100"
                      borderRadius={15}
                      justifyContent="center"
                      alignItems="center"
                    >
                      <FontAwesome5 name="camera" size={45} color={"gray"} />
                    </Box>
                  </Pressable>
                  <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                  >
                    <Pressable>
                      <Box
                        w="$20"
                        h="$20"
                        borderRadius={15}
                        borderColor="$gray100"
                        bgColor="$green100"
                      >
                        <Text>device images here</Text>
                      </Box>
                    </Pressable>

                    <Pressable>
                      <Box
                        w="$20"
                        h="$20"
                        borderRadius={15}
                        borderColor="$gray100"
                        bgColor="$green100"
                      >
                        <Text>device images here</Text>
                      </Box>
                    </Pressable>
                    <Pressable>
                      <Box
                        w="$20"
                        h="$20"
                        borderRadius={15}
                        borderColor="$gray100"
                        bgColor="$green100"
                      >
                        <Text>device images here</Text>
                      </Box>
                    </Pressable>
                    <Pressable>
                      <Box
                        w="$20"
                        h="$20"
                        borderRadius={15}
                        borderColor="$gray100"
                        bgColor="$green100"
                      >
                        <Text>device images here</Text>
                      </Box>
                    </Pressable>
                  </ScrollView>
                </HStack>
              </Box>
            </VStack>
          </Box>
        </Center>
      </Box>
    </View>
  );
};

export default NewPostPage;
