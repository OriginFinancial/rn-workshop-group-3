import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button } from "react-native";

import Home from "./screens/home";
import Pokedex from "./screens/pokedex";
import Pokemon from "./screens/pokemon";
import Webview from "./screens/webview";

import { RootStackParamList } from "types";

const Stack = createNativeStackNavigator<RootStackParamList>();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Pokedex"
          component={Pokedex}
          options={({ navigation }) => ({
            headerRight: () => (
              <Button
                title="webview"
                onPress={() =>
                  navigation.navigate("Webview", {
                    uri: "https://www.google.com/",
                  })
                }
              />
            ),
          })}
        />
        <Stack.Screen name="Pokemon" component={Pokemon} />
        <Stack.Screen
          name="Webview"
          component={Webview}
          options={{ presentation: "modal" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
