import React from "react";
import { ThemedCard } from "../ThemedCard";
import {
  Image,
  TouchableWithoutFeedback,
  View,
  StyleSheet,
} from "react-native";
import { ThemedText } from "../ThemedText";
import { Divider } from "react-native-paper";

type Props = {
  style?: any;
};

const TypeSlide = ({ style }: Props) => {
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
    <ThemedCard
      style={[
        {
          padding: 0,
          flexGrow: 1,
        },
        style,
      ]}
      content={
        <View
          style={{
            flexGrow: 1,
            backgroundColor: "rgba(0, 0, 0, 0)",
            alignSelf: "center",
          }}
        >
          <ThemedText
            style={{
              padding: 20,
              paddingTop: 40,
              fontSize: 30,
              fontFamily: "Trap",
            }}
          >
            Type of hotspot:
          </ThemedText>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              gap: 10,
              padding: 20,
            }}
          >
            {data.map((ele, index) => (
              <View
                key={index}
                style={{
                  width: "45%",
                  padding: 20,
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  gap: 10,
                  borderRadius: 5,
                }}
              >
                <Image style={{ width: 20 }} source={ele.icon} />
                <ThemedText style={{ fontFamily: "SpaceGrotesk" }}>
                  {ele.text}
                </ThemedText>
              </View>
            ))}
          </View>
          <Divider />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 20,
            }}
          >
            <ThemedText
              style={{
                width: "65%",
                color: "rgba(255, 255, 255, 0.45)",
                fontFamily: "SpaceGrotesk",
              }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
            </ThemedText>
            <TouchableWithoutFeedback onPress={() => {}}>
              <View style={styles.buttonContainer}>
                <Image
                  width={20}
                  source={require("@/assets/images/ArrowIcon.png")}
                />
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
      }
    />
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 10,
    borderWidth: 4,
    paddingHorizontal: 4,
    margin: 5,
    opacity: 0.48,
  },
});

export default TypeSlide;
