import React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";

import { MonoText } from "../StyledText";
import { Text, View } from "../Themed";

import Colors from "@/constants/Colors";

export default function EditScreenInfo({ path }: { path: string }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("@/assets/images/dhappaTool.svg")}
      />

      <Text style={styles.title}>SCIENCE OF PERFECTIONISM</Text>
      <View style={styles.getStartedContainer}>
        <Text
          style={styles.getStartedText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)"
        >
          Open up the code for this screen:
        </Text>

        <Text
          style={styles.getStartedText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)"
        >
          Change any of the text, save the file, and your app will automatically
          update.
        </Text>

        <Text
          style={styles.getStartedText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)"
        >
          Change any of the text, save the file, and your app will automatically
          update app will automatically.
        </Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => console.log("text")}
      >
        <Text style={styles.buttonText}>Of course!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 25,
    lineHeight: 29,
    textAlign: "left",
    marginBottom: 10,
    paddingLeft: 5,
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: "center",
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: "center",
  },
  title: {
    fontSize: 23,
    fontWeight: 700,
    marginBottom: 10,
  },
  container: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
  },
  button: {
    height: 54,
    paddingVertical: 12,
    paddingHorizontal: 117,
    borderRadius: 50,
    backgroundColor: "black",
    marginVertical: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 21,
    fontWeight: "500",
  },
  image: {
    width: 300,
    height: 170,
    marginBottom: 25,
    marginTop: 30,
  },
});
