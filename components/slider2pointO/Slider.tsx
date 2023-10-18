import React, { useRef } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Animated,
  Text,
  Dimensions,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Slide from "./Slides";

const Slider: React.FC = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={slidesArr}
        renderItem={({ item }) => <Slide item={item} />}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator
        bounces={false}
        keyExtractor={(item)=>item.name}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const slidesArr = [
  { name: "first slide" },
  { name: "second slide" },
  { name: "third slide" },
];

export default Slider;
