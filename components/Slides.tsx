import React, { useRef } from 'react';
import { View, StyleSheet, ScrollView, Animated, Text, Dimensions } from 'react-native';
import Article from "@/components/article/Article";
import Slider from "@/components/slider2pointO/Slider";

const SlidingPages: React.FC = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const pages = [1, 2, 3]; // Add your pages' content here.

  return (
    <Slider />
    // <View style={styles.container}>
    //   <ScrollView
    //     horizontal
    //     pagingEnabled
    //     showsHorizontalScrollIndicator={true}
    //     onScroll={Animated.event(
    //       [{ nativeEvent: { contentOffset: { x: scrollX } } }],
    //       { useNativeDriver: false }
    //     )}
    //     scrollEventThrottle={16}
    //   >
    //     {pages.map((page, index) => (
    //       <View key={index} style={styles.page}>
    //         <Article path="path required" />
    //       </View>
    //     ))}
    //   </ScrollView>
    // </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  page: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SlidingPages;
