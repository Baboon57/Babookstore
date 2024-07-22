import {Slot} from "expo-router";
import React from "react";
import useCart from "../hooks/useCart";
import {PaperProvider} from "react-native-paper";
import CartProvider from "../providers/CartProvider"
import CartButton from "../components/CartButton"
import {useNavigation} from "@react-navigation/native";
import {handlePress} from "react-native-paper/lib/typescript/components/RadioButton/utils";
import {Image, SafeAreaView} from "react-native";
import {StyleSheet} from 'react-native';
import {contain} from "@hapi/hoek";
import {useRouter} from "expo-router";


export default function RootLayout() {

    return (
        <SafeAreaView style={[styles.container]}>
            <PaperProvider>
                <CartProvider>
                    <CartButton/>

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