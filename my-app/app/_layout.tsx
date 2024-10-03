import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="(screens)/LoginPage"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="(screens)/LogadoPage"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="(screens)/LandingPage"
        options={{ headerShown: false }}
      />
    </Stack>
  );
}
