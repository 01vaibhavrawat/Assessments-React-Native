import { StyleSheet } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";

import SlidingPages from "@/components/Slides";
import { Text, View } from "@/components/Themed";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Slider from "@/components/slider2pointO/Slider";
import Article from "@/components/article/Article";
import Two from "@/app/(tabs)/two";

const Stack = createStackNavigator();

export default function TabOneScreen() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="article"
      >
      <Stack.Screen name="dayStartPage" component={Two} />
        <Stack.Screen name="SlidingPages" component={SlidingPages} />
        <Stack.Screen name="slider" component={Slider} />
        <Stack.Screen name="article" component={Article} />
      </Stack.Navigator>
    </NavigationContainer>
  );
  {
    /* <Article path="typescript" /> */
  }
  {
    /* <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/index.tsx" /> */
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
