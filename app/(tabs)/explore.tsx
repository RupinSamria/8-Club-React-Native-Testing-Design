import Ionicons from "@expo/vector-icons/Ionicons";
import {
  StyleSheet,
  Image,
  Platform,
  View,
  Dimensions,
  Button,
  Text,
} from "react-native";

import { Collapsible } from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
// import {
//   SoftLightBlend,
//   Emboss,
//   Earlybird,
//   Invert,
//   RadialGradient,
// } from "react-native-image-filter-kit";
import {
  Canvas,
  Rect,
  RadialGradient,
  Skia,
  Shader,
  vec,
  Group,
  SweepGradient,
} from "@shopify/react-native-skia";
import { useEffect, useState } from "react";
import {
  useSharedValue,
  withRepeat,
  withTiming,
  Easing,
  useDerivedValue,
} from "react-native-reanimated";
import { ThemedCard } from "@/components/ThemedCard";
import { Divider } from "react-native-paper";

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
    // <ParallaxScrollView
    //   headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
    //   headerImage={
    //     <Ionicons size={310} name="code-slash" style={styles.headerImage} />
    //   }
    // >
    //   <ThemedView style={styles.titleContainer}>
    //     <ThemedText type="title">Explore</ThemedText>
    //   </ThemedView>
    //   <ThemedText>
    //     This app includes example code to help you get started.
    //   </ThemedText>
    //   <Collapsible title="File-based routing">
    //     <ThemedText>
    //       This app has two screens:{" "}
    //       <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText>{" "}
    //       and{" "}
    //       <ThemedText type="defaultSemiBold">app/(tabs)/explore.tsx</ThemedText>
    //     </ThemedText>
    //     <ThemedText>
    //       The layout file in{" "}
    //       <ThemedText type="defaultSemiBold">app/(tabs)/_layout.tsx</ThemedText>{" "}
    //       sets up the tab navigator.
    //     </ThemedText>
    //     <ExternalLink href="https://docs.expo.dev/router/introduction">
    //       <ThemedText type="link">Learn more</ThemedText>
    //     </ExternalLink>
    //   </Collapsible>
    //   <Collapsible title="Android, iOS, and web support">
    //     <ThemedText>
    //       You can open this project on Android, iOS, and the web. To open the
    //       web version, press <ThemedText type="defaultSemiBold">w</ThemedText>{" "}
    //       in the terminal running this project.
    //     </ThemedText>
    //   </Collapsible>
    //   <Collapsible title="Images">
    //     <ThemedText>
    //       For static images, you can use the{" "}
    //       <ThemedText type="defaultSemiBold">@2x</ThemedText> and{" "}
    //       <ThemedText type="defaultSemiBold">@3x</ThemedText> suffixes to
    //       provide files for different screen densities
    //     </ThemedText>
    //     <Image
    //       source={require("@/assets/images/react-logo.png")}
    //       style={{ alignSelf: "center" }}
    //     />
    //     <ExternalLink href="https://reactnative.dev/docs/images">
    //       <ThemedText type="link">Learn more</ThemedText>
    //     </ExternalLink>
    //   </Collapsible>
    //   <Collapsible title="Custom fonts">
    //     <ThemedText>
    //       Open <ThemedText type="defaultSemiBold">app/_layout.tsx</ThemedText>{" "}
    //       to see how to load{" "}
    //       <ThemedText style={{ fontFamily: "SpaceMono" }}>
    //         custom fonts such as this one.
    //       </ThemedText>
    //     </ThemedText>
    //     <ExternalLink href="https://docs.expo.dev/versions/latest/sdk/font">
    //       <ThemedText type="link">Learn more</ThemedText>
    //     </ExternalLink>
    //   </Collapsible>
    //   <Collapsible title="Light and dark mode components">
    //     <ThemedText>
    //       This template has light and dark mode support. The{" "}
    //       <ThemedText type="defaultSemiBold">useColorScheme()</ThemedText> hook
    //       lets you inspect what the user's current color scheme is, and so you
    //       can adjust UI colors accordingly.
    //     </ThemedText>
    //     <ExternalLink href="https://docs.expo.dev/develop/user-interface/color-themes/">
    //       <ThemedText type="link">Learn more</ThemedText>
    //     </ExternalLink>
    //   </Collapsible>
    //   <Collapsible title="Animations">
    //     <ThemedText>
    //       This template includes an example of an animated component. The{" "}
    //       <ThemedText type="defaultSemiBold">
    //         components/HelloWave.tsx
    //       </ThemedText>{" "}
    //       component uses the powerful{" "}
    //       <ThemedText type="defaultSemiBold">
    //         react-native-reanimated
    //       </ThemedText>{" "}
    //       library to create a waving hand animation.
    //     </ThemedText>
    //     {Platform.select({
    //       ios: (
    //         <ThemedText>
    //           The{" "}
    //           <ThemedText type="defaultSemiBold">
    //             components/ParallaxScrollView.tsx
    //           </ThemedText>{" "}
    //           component provides a parallax effect for the header image.
    //         </ThemedText>
    //       ),
    //     })}
    //   </Collapsible>
    // </ParallaxScrollView>
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
      {/* <ThemedCard
        content={
          <View
            style={{
              flexGrow: 1,
              backgroundColor: "transparent",
            }}
          >
            <ThemedText>Type of hotspot:</ThemedText>
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              {data.map((a, b) => (
                <View key={b} style={{ width: "50%", padding: 10 }}>
                  <Image source={a.icon} />
                  <ThemedText>{a.text}</ThemedText>
                </View>
              ))}
            </View>
            <Divider />
            <View style={{ flexDirection: "row" }}>
              <ThemedText style={{ width: "80%" }}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Excepturi rerum ea exercitationem, corporis est voluptatibus nam
                perferendis, repudiandae optio quam blanditiis! Eum explicabo
                repudiandae ipsum et, corrupti ducimus fugiat accusantium?
              </ThemedText>
              <Button title="abc"></Button>
            </View>
          </View>
        }
      /> */}
      <View
        style={{
          backgroundColor: "rgba(0, 0, 0, 0)",
          position: "absolute",
          // justifyContent: "center",
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
