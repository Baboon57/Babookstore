import {Slot} from "expo-router";
import React from "react";
import useCart from "../hooks/useCart";
import {PaperProvider} from "react-native-paper";
import CartProvider from "../providers/CartProvider"
import CartButton from "../components/CartButton"
import {useNavigation} from "@react-navigation/native";
import {handlePress} from "react-native-paper/lib/typescript/components/RadioButton/utils";
import {SafeAreaView} from "react-native";
import {StyleSheet} from 'react-native';


export default function RootLayout() {
    return (
        <SafeAreaView style={[styles.container]}>
            <PaperProvider>
                <CartProvider>
                    <CartButton></CartButton>
                    <Slot/>
                </CartProvider>
            </PaperProvider>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black"
    }
});