import { Slot } from "expo-router";
import React from "react";
import  useCart  from "../hooks/useCart";
import { PaperProvider } from "react-native-paper";
import CartProvider from "../providers/CartProvider"
import CartButton from "../components/CartButton"
import {useNavigation} from "@react-navigation/native";
import {handlePress} from "react-native-paper/lib/typescript/components/RadioButton/utils";




export default function RootLayout() {
  return (
    <PaperProvider>
        <CartProvider>
            <CartButton></CartButton>
        <Slot />
        </CartProvider>
    </PaperProvider>
  );
}
