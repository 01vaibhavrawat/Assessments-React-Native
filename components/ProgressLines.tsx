import React from 'react';
import { StyleSheet } from 'react-native';

import { ExternalLink } from './ExternalLink';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';

import Colors from '@/constants/Colors';

export default function ProgressLines({ pages, currentPage }: { pages: Array<{name: string}>, currentPage: number }) {
  return (
    <View style={styles.container}>
          <View style={styles.container}>
            {pages.map((page, i) => {
              const barStyle = {
                ...styles.barTwo,
                backgroundColor: i === 0 ? "black" : "gray",
              };
              return <View key={page.name} style={barStyle}></View>;
            })}
            </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    color: "#fbb030",
    width: 20,
  },
  container: {
    marginTop: 10,
    display: "flex",
    flexDirection:"row",
    gap: 15,
    justifyContent:"center"
  },
  barTwo: {
    height: 5,
    width: 65,
    backgroundColor:"gray",
    borderRadius: 20,
  }

});
