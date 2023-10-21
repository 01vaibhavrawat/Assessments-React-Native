import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Article from "../article/Article";
import { ScrollView } from 'react-native-gesture-handler';

interface ListItemProps {
  item: { name: string }; 
}

const screenWidth = Dimensions.get('window').width;


const Slide: React.FC<ListItemProps> = ({ item }) => {
  return (
    <ScrollView>
    <Article path={"string required"} />
    </ScrollView>
      // <View style={styles.container}>
      //   <Text style={styles.text}>{item.name}</Text>
      // </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: screenWidth,
  },
  text: {
    fontSize: 16,

  },
});

export default Slide;
