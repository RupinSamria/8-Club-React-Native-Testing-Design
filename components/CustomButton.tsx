import { Container } from "@shopify/react-native-skia/lib/typescript/src/renderer/Container";
import React from "react";
import {
  TouchableWithoutFeedback,
  StyleSheet,
  View,
  Image,
  Text,
  useWindowDimensions,
} from "react-native";
import Animated, {
  SharedValue,
  interpolateColor,
  useAnimatedStyle,
  withSpring,
  withTiming,
} from "react-native-reanimated";

type Props = {
  handlerPress: () => void;
  buttonVal: SharedValue<number>;
};

const CustomButton = ({ handlerPress, buttonVal }: Props) => {
  const { height: SCREEN_HEIGHT } = useWindowDimensions();

  const animatedColor = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      buttonVal.value,
      [0, SCREEN_HEIGHT, 2 * SCREEN_HEIGHT],
      ["#FD94B2", "#F8DAC2", "#154F40"]
    );
    return {
      backgroundColor: backgroundColor,
    };
  });

  const buttonAnimationStyle = useAnimatedStyle(() => {
    return {
      width:
        buttonVal.value === 2 * SCREEN_HEIGHT
          ? withSpring(260)
          : withSpring(120),
      height:
        buttonVal.value === 2 * SCREEN_HEIGHT
          ? withSpring(260)
          : withSpring(120),
    };
  });

  const arrowAnimationStyle = useAnimatedStyle(() => {
    return {
      opacity:
        buttonVal.value === 2 * SCREEN_HEIGHT ? withTiming(0) : withTiming(1),
      transform: [
        {
          translateX:
            buttonVal.value === 2 * SCREEN_HEIGHT
              ? withTiming(100)
              : withTiming(0),
        },
      ],
    };
  });

  const textAnimationStyle = useAnimatedStyle(() => {
    return {
      opacity:
        buttonVal.value === 2 * SCREEN_HEIGHT ? withTiming(1) : withTiming(0),
      transform: [
        {
          translateX:
            buttonVal.value === 2 * SCREEN_HEIGHT
              ? withTiming(0)
              : withTiming(-100),
        },
      ],
    };
  });

  return (
    <TouchableWithoutFeedback onPress={handlerPress}>
      <Animated.View
        style={[styles.container, animatedColor, buttonAnimationStyle]}
      >
        <Animated.Text style={[styles.textButton, textAnimationStyle]}>
          Get Started
        </Animated.Text>
        <Animated.Image
          style={arrowAnimationStyle}
          source={require("@/assets/images/ArrowIcon.png")}
        />
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    zIndex: 1,
    bottom: 100,
    width: 120,
    height: 120,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
  },
  textButton: {
    color: "#fff",
    fontSize: 20,
    position: "absolute",
  },
});
