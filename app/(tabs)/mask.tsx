import {
  PixelRatio,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  useWindowDimensions,
} from "react-native";
import React, { useRef, useState } from "react";
import {
  Canvas,
  Circle,
  Group,
  Mask,
  SkImage,
  makeImageFromView,
} from "@shopify/react-native-skia";
import { useSharedValue, withTiming } from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";

import { useColorScheme } from "@/hooks/useColorScheme.web";
import CustomButton from "@/components/CustomButton";

const RenderItem = ({ item }) => {
  const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = useWindowDimensions();

  return (
    <View
      style={[
        styles.itemContainer,
        {
          width: SCREEN_WIDTH,
          height: SCREEN_HEIGHT,
          backgroundColor: item.backgroundColor,
        },
      ]}
    >
      <Image source={item.image} />
      <Text style={[styles.itemText, { color: item.textColor }]}>
        {item.text}
      </Text>
    </View>
  );
};

export default function MaskScreen() {
  const theme = useColorScheme();
  // const { width, height } = Dimensions.get("window");
  const { height: SCREEN_HEIGHT } = useWindowDimensions();
  const buttonVal = useSharedValue(0);
  const data = [
    {
      id: 1,
      image: require("@/assets/images/Image1.png"),
      text: "Lorem Ipsum dolor sit amet",
      textColor: "#f8dac2",
      backgroundColor: "#154f40",
    },
    {
      id: 2,
      image: require("@/assets/images/Image2.png"),
      text: "Lorem Ipsum dolor sit amet",
      textColor: "#154f40",
      backgroundColor: "#fd94b2",
    },
    {
      id: 3,
      image: require("@/assets/images/Image3.png"),
      text: "Lorem Ipsum dolor sit amet",
      textColor: "black",
      backgroundColor: "#f8dac2",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const handlerPress = () => {
    if (currentIndex === data.length - 1) {
      console.log("END");
      return;
    }
    setCurrentIndex((prev) => prev + 1);
    buttonVal.value = withTiming(buttonVal.value + SCREEN_HEIGHT);
  };

  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <View>
        {data.map((item, index) => {
          return (
            currentIndex === index && <RenderItem item={item} key={index} />
          );
        })}
      </View>
      <CustomButton handlerPress={handlerPress} buttonVal={buttonVal} />
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    alignItems: "center",
    paddingTop: 40,
  },
  itemText: {
    marginTop: 10,
    textAlign: "center",
    fontSize: 44,
    fontWeight: "bold",
    marginHorizontal: 20,
  },
});
