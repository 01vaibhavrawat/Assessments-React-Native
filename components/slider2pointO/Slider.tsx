import React, { useRef, useState } from "react";
import { View, StyleSheet, FlatList, Text, Button, Dimensions, TouchableOpacity } from "react-native";
import Slide from "./Slides";

const Slider: React.FC = () => {
  const slidesArr = [
    { name: "first slide" },
    { name: "second slide" },
    { name: "third slide" },
  ];

  const flatListRef = useRef<FlatList<{ name: string } | null>>(null); // Specify the type for FlatList
  const [currentIndex, setCurrentIndex] = useState<number>(0); // Specify the type for currentIndex

  const goToNextSlide = () => {
    if (currentIndex < slidesArr.length - 1) {
      flatListRef.current?.scrollToIndex({ animated: true, index: currentIndex + 1 });
      setCurrentIndex(currentIndex + 1);
    }
  };

  const goToPreviousSlide = () => {
    if (currentIndex > 0) {
      flatListRef.current?.scrollToIndex({ animated: true, index: currentIndex - 1 });
      setCurrentIndex(currentIndex - 1);
    }
  };

  const onScroll = (event: any) => {
    const offset = event.nativeEvent.contentOffset.x;
    const index = Math.ceil(offset / Dimensions.get("window").width);
    setCurrentIndex(index);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={slidesArr}
        renderItem={({ item }) => <Slide item={item} />}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        bounces={false}
        keyExtractor={(item) => item.name}
        ref={flatListRef}
        onMomentumScrollEnd={onScroll}
      ></FlatList>

      <View style={styles.buttonContainer}>
        <Button title="Back" onPress={goToPreviousSlide} disabled={currentIndex === 0} />
        <Button
          title="Next"
          onPress={goToNextSlide}
          disabled={currentIndex === slidesArr.length - 1}
        />
      </View>

      <View style={styles.indicatorContainer}>
        {
          slidesArr.map((item, i)=>{
            return (
            <TouchableOpacity
            key={i}
            style={[
              styles.indicatorDot,
              {
                backgroundColor: currentIndex === i ? "#007AFF" : "#ccc",
              },
            ]}
            >
            </TouchableOpacity>)
          })
        }
        {/* {slidesArr.map((_, index) => (
          <TouchableOpacity
            key={index}
            style={[var jump = function(nums) {

    const size = nums.length;

    // destination is last index
    let destination = size-1;

    let curCoverage = 0, lastJumpIdx = 0;

    // counter of jump
    let timesOfJump = 0;

    // Quick response if start index == destination index == 0
    if( size == 1 ){
        return 0;
    }


    // Greedy stragegy: extend coverage as long as possible with lazp jump
    for( let i = 0 ; i < size ; i++){

        // extend coverage
        curCoverage = Math.max(curCoverage, i + nums[i] );

        // forced to jump (by lazy jump) to extend coverage
        if( i == lastJumpIdx ){

            lastJumpIdx = curCoverage;

            timesOfJump++;

            // check if we reached destination already
            if( curCoverage >= destination){
                return timesOfJump;
            }
        }
    }

    return timesOfJump;
    
              styles.indicatorDot,
              {
                backgroundColor: currentIndex === index ? "#007AFF" : "#ccc",
              },
            ]}
          />
        )} */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
  indicatorContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 16,
  },
  indicatorDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
});

export default Slider;
