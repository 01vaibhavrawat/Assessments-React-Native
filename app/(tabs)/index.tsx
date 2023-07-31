import { StyleSheet } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import Article from "@/components/article/Article";

import SlidingPages from "@/components/Slides";
import { Text, View } from "@/components/Themed";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

export default function TabOneScreen() {
  return (
      <NavigationContainer independent={true}>
        <Stack.Navigator>
          <Stack.Screen name="SlidingPages" component={SlidingPages} />
        </Stack.Navigator>
      </NavigationContainer>
      );
      {/* <Article path="typescript" /> */}
      {/* <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/index.tsx" /> */}

  
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
