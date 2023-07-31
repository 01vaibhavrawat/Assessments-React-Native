import React, { useState } from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";

import { MonoText } from "../StyledText";
import { Text, View } from "../Themed";

import Colors from "@/constants/Colors";
import { ScrollView } from "react-native-gesture-handler";

import ProgressLines from "@/components/ProgressLines";

export default function EditScreenInfo({ path }: { path: string }) {
  const [currentPage, setCurrentPage] = useState<number>(1);
  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <ProgressLines
        pages={[
          { name: "this" },
          { name: "this 2" },
          { name: "this 3" },
          { name: "this 4" },
        ]}
        currentPage={currentPage}
      ></ProgressLines>
      <View lightColor="#eee" darkColor="rgba(255,255,255,0.1)" style={styles.container}>
        <Image
          style={styles.image}
          source={require("@/assets/images/dhappaTool.svg")}
        />
        <View lightColor="#eee" darkColor="rgba(255,255,255,0.1)" style={styles.bodyContainer}>
          <Text style={styles.title}>Lorem ipsum dolor</Text>
          <Text
            style={styles.bodyText}
            lightColor="rgba(0,0,0,0.8)"
            darkColor="rgba(255,255,255,0.8)"
          >
            Open up the code for this screen:
          </Text>

          <Text
            style={styles.bodyText}
            lightColor="rgba(0,0,0,0.8)"
            darkColor="rgba(255,255,255,0.8)"
          >
            Change any of the text, save the file, and your app will
            automatically update.
          </Text>

          <Text
            style={styles.bodyText}
            lightColor="rgba(0,0,0,0.8)"
            darkColor="rgba(255,255,255,0.8)"
          >
            Change any of the text, save the file, and your app will
            automatically update app will automatically.
          </Text>
        </View>
      </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log("text")}
        >
          <Text style={styles.buttonText}>Of course!</Text>
        </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  bodyContainer: {
    alignItems: "center",
    marginHorizontal: 50,
    paddingBottom: 100,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  bodyText: {
    fontSize: 20,
    lineHeight: 29,
    textAlign: "left",
    marginBottom: 10,
    fontWeight: "500",
    width: 300,
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: "center",
  },
  helpLink: {
    paddingVertical: 15,
  },
  scrollView: {
    position:"relative",
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
  },
  helpLinkText: {
    textAlign: "center",
  },
  title: {
    textAlign: "left",
    fontSize: 23,
    fontWeight: "700",
    marginBottom: 12,
    width: 300,
  },
  container: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
  },
  button: {
    height: 54,
    paddingVertical: 12,
    paddingHorizontal: 107,
    borderRadius: 50,
    backgroundColor: "black",
    marginVertical: 20,
    position:"absolute",
    bottom: 2,
  },
  buttonText: {
    color: "white",
    fontSize: 21,
    fontWeight: "500",
  },
  image: {
    width: 280,
    height: 150,
    marginBottom: 25,
    marginTop: 30,
  },
});
