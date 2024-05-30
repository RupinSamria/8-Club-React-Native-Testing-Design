import { Text, type TextProps, StyleSheet, View } from "react-native";

import { useThemeColor } from "@/hooks/useThemeColor";

export type ProgressBarProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  progress?: number;
  type?: "default" | "title" | "defaultSemiBold" | "subtitle" | "link";
};

export function ProgressBar({
  style,
  lightColor,
  darkColor,
  progress = 0,
  type = "default",
  ...rest
}: ProgressBarProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

  return (
    <View
      style={[
        {
          backgroundColor: "rgba(0, 0, 0, 0)",
          position: "absolute",
        },
        style,
      ]}
    >
      <Text style={{ color: "#fff", paddingVertical: 50 }}>gdycehwid</Text>
    </View>
  );
}

const styles = StyleSheet.create({
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
