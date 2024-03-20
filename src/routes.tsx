import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./screens/home";
import Pokedex from "./screens/pokedex";
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
        <Stack.Screen name="Pokedex" component={Pokedex} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
