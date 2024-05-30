import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import React from "react";
import Animated, {
  Extrapolation,
  SharedValue,
  interpolate,
  interpolateColor,
  useAnimatedStyle,
} from "react-native-reanimated";

type Props = {
  data: any;
  buttonVal: SharedValue<number>;
};

const Pagination = ({ data, buttonVal }: Props) => {
  return (
    <View style={styles.paginationContainer}>
      {data.map((_, index) => {
        return <Dot index={index} buttonVal={buttonVal} key={index} />;
      })}
    </View>
  );
};

export default Pagination;

type DotProps = {
  index: number;
  SharedValue: SharedValue<number>;
};

const Dot = ({ index, buttonVal }: Props) => {
  const { height: SCREEN_HEIGHT } = useWindowDimensions();

  const animatedDotStyle = useAnimatedStyle(() => {
    const widthAnimation = interpolate(
      buttonVal.value,
      [
        (index - 1) * SCREEN_HEIGHT,
        index * SCREEN_HEIGHT,
        (index + 1) * SCREEN_HEIGHT,
      ],
      [10, 30, 10],
      Extrapolation.CLAMP
    );

    const opacityAnimation = interpolate(
      buttonVal.value,
      [
        (index - 1) * SCREEN_HEIGHT,
        index * SCREEN_HEIGHT,
        (index + 1) * SCREEN_HEIGHT,
      ],
      [0.5, 1, 0.5],
      Extrapolation.CLAMP
    );
    return {
      width: widthAnimation,
      opacity: opacityAnimation,
    };
  });

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
  return (
    <Animated.View style={[styles.dot, animatedColor, animatedDotStyle]} />
  );
};

const styles = StyleSheet.create({
  dot: {
    height: 10,
    width: 10,
    marginHorizontal: 5,
    borderRadius: 5,
  },
  paginationContainer: {
    position: "absolute",
    bottom: 70,
    flexDirection: "row",
  },
});
