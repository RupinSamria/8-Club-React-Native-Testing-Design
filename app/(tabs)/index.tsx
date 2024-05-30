import { useState } from "react";
import { StyleSheet, SafeAreaView, View, Dimensions } from "react-native";
import {
  Blend,
  Canvas,
  RadialGradient,
  Rect,
  vec,
} from "@shopify/react-native-skia";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedScrollHandler,
  interpolate,
} from "react-native-reanimated";
import { ThemedText } from "@/components/ThemedText";
import { useColorScheme } from "@/hooks/useColorScheme.web";
import TypeSlide from "@/components/hotspotslides/TypeSlide";
import WhereSlide from "@/components/hotspotslides/WhereSlide";

export default function HomeScreen() {
  const theme = useColorScheme();

  const { width, height } = Dimensions.get("window");
  const SIZE = width * 0.85;
  const SPACER = (width - SIZE) / 2;

  const data = [
    { component: <TypeSlide /> },
    { component: <WhereSlide /> },
    { component: <TypeSlide /> },
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

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0)",
      }}
    >
      {/* some useful Blend modes I explored: exclusion, softLight, screen, plus */}
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
            if (!item.component) {
              return <View style={{ width: SPACER / 2 }} key={index} />;
            }
            return (
              <View style={{ width: SIZE }} key={index}>
                <Animated.View style={[styles.carouselItemContainer, style]}>
                  {item.component}
                </Animated.View>
              </View>
            );
          })}
        </Animated.ScrollView>
      </View>
      <ThemedText darkColor="true" type="subtitle" style={styles.stepContainer}>
        Step 1/4
      </ThemedText>
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
  },
  carouselImageContainer: {
    width: "100%",
    height: undefined,
  },
});
