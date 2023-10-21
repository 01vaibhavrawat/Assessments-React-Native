import React, { useRef, useState } from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { Dimensions } from "react-native";

import { MonoText } from "../StyledText";
import { Text, View } from "../Themed";

import { ScrollView } from "react-native-gesture-handler";

import ProgressLines from "@/components/ProgressLines";

export default function EditScreenInfo({ path }: { path: string }) {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const scrollViewRef = useRef<ScrollView | null>(null);
  const pages = [
    { name: "this" },
    { name: "this 2" },
    { name: "this 3" },
    { name: "this 4" },
  ];
  const handleNextPage = () => {
    console.log("i am getting logged")
    const nextPage = currentPage + 1;
    if (nextPage < pages.length) {
      setCurrentPage(nextPage);
      scrollViewRef.current?.scrollTo({
        x: Dimensions.get("window").width * nextPage,
        animated: true,
      });
    }
  };

  const handleScroll = (event: any) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    console.log("contentOffset-->", contentOffsetX)
    const newPage = Math.round(contentOffsetX / Dimensions.get("window").width);
    setCurrentPage(newPage);
  };

  return (
    <View>
    <ProgressLines pages={pages} currentPage={currentPage}></ProgressLines>
    <ScrollView
      ref={scrollViewRef}
      
      pagingEnabled
      contentContainerStyle={styles.scrollView}
      showsHorizontalScrollIndicator={false}
      onScroll={handleScroll}
      scrollEventThrottle={16}
    >
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require("@/assets/images/procrastination.jpg")}
        />
        <View style={styles.bodyContainer}>
          <Text style={styles.title}>Lorem ipsum dolor</Text>
          <Text style={styles.bodyText}>Open up the code for this screen:</Text>

          <Text style={styles.bodyText}>
            Change any of the text, save the file, and your app will
            automatically update.
          </Text>

          <Text style={styles.bodyText}>
            Change any of the text, save the file, and your app will
            automatically update app will automatically.
          </Text>
          <Text style={styles.bodyText}>
            Change any of the text, save the file, and your app will
            automatically update app will automatically.
          </Text>
          <Text style={styles.bodyText}>
            Change any of the text, save the file, and your app will
            automatically update app will automatically.
          </Text>
          <Text style={styles.bodyText}>
            Change any of the text, save the file, and your app will
            automatically update app will automatically.
          </Text>
          <Text style={styles.bodyText}>
            Change any of the text, save the file, and your app will
            automatically update app will automatically.
          </Text>
          <Text style={styles.bodyText}>
            Change any of the text, save the file, and your app will
            automatically update app will automatically.
          </Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={handleNextPage}
        >
          <Text style={styles.buttonText}>Of course!</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  bodyContainer: {
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
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 100,
    backgroundColor: "#fff",
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
    resizeMode: "cover",
  },
});
