import { useEffect, useState } from "react";
import { StyleSheet, View, Dimensions, Text } from "react-native";
import { Canvas, Rect, vec, SweepGradient } from "@shopify/react-native-skia";
import {
  useSharedValue,
  withRepeat,
  withTiming,
  Easing,
  useDerivedValue,
} from "react-native-reanimated";

const { width, height } = Dimensions.get("window");

export default function TabTwoScreen() {
  const rotation = useSharedValue(0);

  const centerX = width / 2;
  const centerY = height / 2;
  const centerVec = vec(centerX, centerY);

  const [time, setTime] = useState("00:00");

  useEffect(() => {
    rotation.value = withRepeat(
      withTiming(2, {
        duration: 4000,
        easing: Easing.linear,
      }),
      -1,
      false
    );

    var hours = new Date().getHours();
    var mins = new Date().getMinutes();

    setTime(`${hours}:${mins}`);
  });

  const animationRotation = useDerivedValue(() => {
    return [{ rotate: Math.PI * rotation.value }];
  }, [rotation]);

  const data = [
    {
      icon: require("@/assets/images/brunchIcon.png"),
      text: "Brunch",
    },
    {
      icon: require("@/assets/images/dinnerIcon.png"),
      text: "Dinner",
    },
    {
      icon: require("@/assets/images/dinnerIcon.png"),
      text: "Beer Walk",
    },
    {
      icon: require("@/assets/images/dinnerIcon.png"),
      text: "House Party",
    },
    {
      icon: require("@/assets/images/dinnerIcon.png"),
      text: "Clubbing",
    },
    {
      icon: require("@/assets/images/dinnerIcon.png"),
      text: "Art Sesh",
    },
    {
      icon: require("@/assets/images/dinnerIcon.png"),
      text: "Wine Tasting",
    },
    {
      icon: require("@/assets/images/dinnerIcon.png"),
      text: "Pool Party",
    },
  ];

  return (
    <View style={{ flex: 1 }}>
      <Canvas style={{ flex: 1 }}>
        <Rect x={0} y={0} width={width} height={height}>
          <SweepGradient
            origin={centerVec}
            c={centerVec}
            colors={["white", "grey", "#222222", "black"]}
            start={0}
            end={360}
            transform={animationRotation}
          />
        </Rect>
      </Canvas>
      <View
        style={{
          backgroundColor: "rgba(0, 0, 0, 0)",
          position: "absolute",
          alignItems: "center",
          top: 80,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      >
        <Text style={{ fontSize: 50 }}>{time}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
