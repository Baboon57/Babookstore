import { Slot } from "expo-router";
import React from "react";
import  useCart  from "../hooks/useCart";
import { PaperProvider } from "react-native-paper";
import CartProvider from "../providers/CartProvider"


export default function RootLayout() {
  return (
    <PaperProvider>
        <CartProvider>
        <Slot />
        </CartProvider>
    </PaperProvider>
  );
}
