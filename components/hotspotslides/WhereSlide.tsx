import React, { useState } from "react";
import { ThemedCard } from "../ThemedCard";
import {
  Image,
  TouchableWithoutFeedback,
  View,
  StyleSheet,
  TextInput,
  Switch,
} from "react-native";
import { ThemedText } from "../ThemedText";
import { Divider } from "react-native-paper";

type Props = {
  style?: any;
};

const WhereSlide = ({ style }: Props) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const [value, onChangeText] = useState("");
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
            Where is your Hotspot?
          </ThemedText>
          <View
            style={{
              padding: 20,
            }}
          >
            <TextInput
              editable
              multiline
              numberOfLines={4}
              maxLength={40}
              onChangeText={(text) => onChangeText(text)}
              value={value}
              style={{ padding: 10 }}
            />
          </View>
          <Divider />
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View style={{ flexDirection: "row" }}>
              <Image source={require("@/assets/images/sparkles.png")} />
              <ThemedText>Venue not decided yet</ThemedText>
            </View>
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
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

export default WhereSlide;
