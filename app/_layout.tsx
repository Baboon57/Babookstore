import { Slot } from "expo-router";
import React from "react";
import { useCart } from "../hooks/useCart.tsx";
import { PaperProvider } from "react-native-paper";
export default function RootLayout() {

  return (
    <PaperProvider>
        <Slot />

    </PaperProvider>
  );
}
