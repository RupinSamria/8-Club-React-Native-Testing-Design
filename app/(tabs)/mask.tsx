import React, { useRef, useState } from "react";
import {
  PixelRatio,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import {
  Canvas,
  Image,
  SkImage,
  makeImageFromView,
} from "@shopify/react-native-skia";
import { useSharedValue, withTiming } from "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme.web";
import CustomButton from "@/components/CustomButton";
import Pagination from "@/components/Pagination";

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
  const pd = PixelRatio.get();
  const theme = useColorScheme();
  // const { width, height } = Dimensions.get("window");
  const { height: SCREEN_HEIGHT } = useWindowDimensions();
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef(null);
  const [overlay, setOverlay] = useState<SkImage | null>(null);
  const buttonVal = useSharedValue(0);

  const wait = async (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

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

  const handlerPress = async () => {
    if (currentIndex === data.length - 1) {
      console.log("END");
      return;
    }
    const snapshot = await makeImageFromView(ref);
    setOverlay(snapshot);
    await wait(80);

    setCurrentIndex((prev) => prev + 1);
    buttonVal.value = withTiming(buttonVal.value + SCREEN_HEIGHT);
  };

  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <View ref={ref} collapsable={false}>
        {data.map((item, index) => {
          return (
            currentIndex === index && <RenderItem item={item} key={index} />
          );
        })}
      </View>
      {overlay && (
        <Canvas style={StyleSheet.absoluteFillObject} pointerEvents="none">
          <Image
            image={overlay}
            x={0}
            y={0}
            width={overlay.width() / pd}
            height={overlay.height() / pd}
          />
        </Canvas>
      )}
      <CustomButton handlerPress={handlerPress} buttonVal={buttonVal} />
      <Pagination data={data} buttonVal={buttonVal} />
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
