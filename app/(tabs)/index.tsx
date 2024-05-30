import {
  Image,
  StyleSheet,
  Platform,
  SafeAreaView,
  View,
  Button,
  Dimensions,
  TouchableWithoutFeedback,
  FlatList,
  ScrollView,
} from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { ThemedCard } from "@/components/ThemedCard";
import { ProgressBar } from "@/components/ProgressBar";
import { useColorScheme } from "@/hooks/useColorScheme.web";
import { Divider } from "react-native-paper";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Demo } from "@/components/CanvasRadialGradient";
import {
  Blend,
  Canvas,
  RadialGradient,
  Rect,
  vec,
} from "@shopify/react-native-skia";
import TypeSlide from "@/components/hotspotslides/TypeSlide";
import { useState } from "react";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedScrollHandler,
  interpolate,
} from "react-native-reanimated";

export default function HomeScreen() {
  const theme = useColorScheme();

  const { width, height } = Dimensions.get("window");
  const SIZE = width * 0.85;
  const SPACER = (width - SIZE) / 2;

  const data = [
    {
      icon: require("@/assets/images/Image1.png"),
      text: "Brunch",
    },
    {
      icon: require("@/assets/images/Image2.png"),
      text: "Dinner",
    },
    {
      icon: require("@/assets/images/Image3.png"),
      text: "Beer Walk",
    },
  ];

  const [newData] = useState([
    { key: "spacer-left" },
    ...data,
    { key: "spacer-right" },
  ]);

  const x = useSharedValue(0);
  const onScroll = useAnimatedScrollHandler({
    onScroll: (e) => {
      x.value = e.contentOffset.x;
    },
  });
  // exclusion, softLight, screen, plus
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0)",
      }}
    >
      <Canvas style={{ flex: 1 }}>
        <Rect x={0} y={0} width={width} height={height}>
          <Blend mode="exclusion">
            <RadialGradient
              c={vec(288, 458)}
              r={178}
              colors={["#F560FF", "black"]}
            />
            <RadialGradient
              c={vec(178, 398)}
              r={178}
              colors={["#7445BC", "black"]}
            />
          </Blend>
        </Rect>
      </Canvas>
      {/* <ProgressBar /> */}
      <View
        style={{
          position: "absolute",
          zIndex: 2,
          height: "100%",
        }}
      >
        <Animated.ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          bounces={false}
          scrollEventThrottle={16}
          snapToInterval={SIZE}
          decelerationRate="fast"
          onScroll={onScroll}
          // contentContainerStyle={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
        >
          {newData.map((item, index) => {
            const style = useAnimatedStyle(() => {
              const scale = interpolate(
                x.value,
                [(index - 2) * SIZE, (index - 1) * SIZE, index * SIZE],
                [0.8, 1, 0.8]
              );
              return {
                transform: [{ scale }],
              };
            });
            if (!item.icon) {
              return <View style={{ width: SPACER / 2 }} key={index} />;
            }
            return (
              <View style={{ width: SIZE }} key={index}>
                <Animated.View
                  style={[
                    styles.carouselItemContainer,
                    style,
                    // { backgroundColor: "red" },
                  ]}
                >
                  <TypeSlide style={styles.carouselImageContainer} />
                </Animated.View>
              </View>
            );
          })}
        </Animated.ScrollView>
      </View>
      {/* <ThemedText darkColor="true" type="subtitle" style={styles.stepContainer}>
        Step 1/4
      </ThemedText> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    alignSelf: "center",
    alignItems: "flex-end",
    gap: 8,
    marginBottom: 8,
  },
  carouselItemContainer: {
    overflow: "hidden",
    height: "100%",
    width: "80%",
  },
  carouselImageContainer: {
    width: "100%",
    height: undefined,
    // aspectRatio: 1,
  },
});
