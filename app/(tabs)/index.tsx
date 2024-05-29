import {
  Image,
  StyleSheet,
  Platform,
  SafeAreaView,
  View,
  Button,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { ThemedCard } from "@/components/ThemedCard";
import { ProgressBar } from "@/components/ProgressBar";
import { useColorScheme } from "@/hooks/useColorScheme.web";
import { LinearGradient } from "expo-linear-gradient";
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

export default function HomeScreen() {
  const theme = useColorScheme();
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
  const { width, height } = Dimensions.get("window");

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
      <ProgressBar />
      <ThemedCard
        style={{ position: "absolute", top: width / 2, padding: 0 }}
        content={
          <View
            style={{
              flexGrow: 1,
              backgroundColor: "rgba(0, 0, 0, 0)",
            }}
          >
            <ThemedText
              style={{ margin: 20, fontSize: 30, fontFamily: "Trap" }}
            >
              Type of hotspot:
            </ThemedText>
            <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 10 }}>
              {data.map((a, b) => (
                <View
                  key={b}
                  style={{
                    width: "45%",
                    padding: 20,
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    gap: 10,
                    borderRadius: 5,
                  }}
                >
                  <Image style={{ width: 20 }} source={a.icon} />
                  <ThemedText style={{ fontFamily: "SpaceGrotesk" }}>
                    {a.text}
                  </ThemedText>
                </View>
              ))}
            </View>
            <Divider />
            <View style={{ flexDirection: "row" }}>
              <ThemedText style={{ width: "80%", color: "rgba(0, 0, 0, 1)" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
              </ThemedText>
              <TouchableWithoutFeedback onPress={() => {}}>
                <View style={styles.buttonContainer}>
                  {/* <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
                  <FontAwesomeIcon icon={faArrowRight} /> */}
                  {/* <Image source={require("@/assets/images/ArrowIcon.png")} /> */}
                </View>
              </TouchableWithoutFeedback>
            </View>
          </View>
        }
      />
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
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
