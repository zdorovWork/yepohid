import { PortalProvider } from "@gorhom/portal";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

import { ModalProvider } from "shared/ui/modal";

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <PortalProvider>
      <ModalProvider>
        <Stack>
          <Stack.Screen name="index" />
          <Stack.Screen name="lists/[id]" />
          <Stack.Screen name="+not-found" />
        </Stack>
      </ModalProvider>
      <StatusBar style="auto" />
    </PortalProvider>
  );
}
