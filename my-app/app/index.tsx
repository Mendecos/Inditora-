import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginPage from "./(screens)/LoginPage";
import LandingPage from "./(screens)/LandingPage";
import Logado from "./(screens)/LogadoPage";

type RootStackParamList = {
  Landing: undefined;
  Login: undefined;
  Logado: { email: string }; // Definindo o parâmetro 'email' para a rota 'Logado'
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen
          name="Landing"
          options={{ headerShown: false }}
          component={LandingPage}
        />
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Logado" component={Logado} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
