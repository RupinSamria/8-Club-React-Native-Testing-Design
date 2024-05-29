import {
  Text,
  type TextProps,
  StyleSheet,
  View,
  Image,
  ImageBackground,
} from "react-native";

import { useThemeColor } from "@/hooks/useThemeColor";
import { ThemedText } from "@/components/ThemedText";
import ParallaxScrollView from "./ParallaxScrollView";
// import { LinearGradient } from "expo-linear-gradient";
// import RadialGradient from "react-native-radial-gradient";
// import { Svg, Defs, RadialGradient, Stop, Rect } from "react-native-svg";
import { Children } from "react";
import { Canvas, Rect, vec, RadialGradient } from "@shopify/react-native-skia";

export type ThemedCardProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: "default" | "title" | "defaultSemiBold" | "subtitle" | "link";
};

export function ThemedCard({
  style,
  lightColor,
  darkColor,
  type = "default",
  content,
  ...rest
}: ThemedCardProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

  return (
    <ImageBackground
      source={require("@/assets/images/dots.png")}
      resizeMode="cover"
      style={[styles.mainCard, style]}
      imageStyle={{ opacity: 0.5 }}
    >
      {/* <View style={[styles.mainCard, style]}> */}
      <View style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}>{content}</View>
      {/* </View> */}
    </ImageBackground>
    // <RadialGradient
    //   style={{ width: 200, height: 200 }}
    //   colors={["black", "green", "blue", "red"]}
    //   stops={[0.1, 0.4, 0.3, 0.75]}
    //   center={[100, 100]}
    //   radius={200}
    // >
    //  {child elements}
    // </RadialGradient>
    // <View>{content}</View>
  );
}

const styles = StyleSheet.create({
  mainCard: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#fff",
    padding: 20,
    backgroundColor: "rgba(0, 0, 0, 0)",
  },
  dotsBackgroud: {},
  default: {
    fontSize: 16,
    lineHeight: 24,
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "600",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    lineHeight: 32,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    color: "#0a7ea4",
  },
});
