import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginPage from "../(screens)/LoginPage";
import LandingPage from "../(screens)/LandingPage";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Landing"
          options={{ headerShown: false }}
          component={LandingPage}
        />
        <Stack.Screen
          name="Login"
          component={LoginPage}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
