import { Pressable, View, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Center, Image, Box } from '@gluestack-ui/themed'


const PostImageFullView = () => {
  const [scale, setScale] = useState(1);

  const zoomImg = () => {
    setScale(scale + 1);

    if (scale == 3) {
      setScale(1);
    }
  }


  return (


    <View style={{ flex: 1, backgroundColor: "black" }}>

      <Pressable onPress={() => zoomImg()}>
        <Box>

          <Image
            source={{ uri: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" }}
            alt=""
            style={{
              width: '100%',
              height: '100%',
              transform: [{ scale: scale }]
            }}
            resizeMode="contain"
          />
        </Box>
      </Pressable>

    </View>

  );
}

export default PostImageFullView