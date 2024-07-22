import React, {useContext, useState} from 'react';
import {View, TouchableOpacity, StyleSheet, ScrollView, Image} from 'react-native';
// import { useNavigation } from '@react-navigation/native';
import {Modal as BisModal} from "react-native";
import {Button, Text} from 'react-native-paper';

import useCart from "@/hooks/useCart"
import CartProvider from "@/providers/CartProvider";
import CartCardBook from "@/components/CartCardBook";
import CartContext from '@/contexts/cart';

interface CartButtonProps<CartButtonProps> {
    onPress: () => void;
}


const CartButton: React.FC = () => {
    const {cart} = useCart();
    const [isVisible, setIsVisible] = useState(false);

    const handleCartPress = () => {
        setIsVisible(true);
    };
    const handleCloseModal = () => {
        setIsVisible(false);
    }


    return (
        <>
            <TouchableOpacity style={[styles.cartButton, {backgroundColor: '#db924b'}]} onPress={handleCartPress}>
                <Text style={{
                    fontSize: styles.cartButton.fontSize,
                    fontWeight: styles.cartButton.fontWeight,
                    color: "#20161f",
                    padding: 12,
                }}>
                    Cart
                </Text>
            </TouchableOpacity>

            <BisModal
                animationType="slide"
                transparent={true} // Set modal to be transparent
                visible={isVisible} // Control modal visibility based on state
                onRequestClose={handleCloseModal} // Function to call when user requests to close modal

            >
                <ScrollView>
                    <View style={styles.cartButton}>
                        <Text variant="displayLarge" style={styles.cartButtonText}>Books in your Cart</Text>

                        <CartCardBook/>

                        <Button
                            style={styles.cartButton}
                            mode="contained"
                            onPress={handleCloseModal}
                        >
                            <Text style={styles.cartButtonText}> Close </Text>
                        </Button>
                        <Image source={require('../assets/images/algerie_telecom.png')}
                                style={{maxWidth: '100%', alignSelf: 'center'}}/>
                    </View></ScrollView>

            </BisModal>

        </>
    )
};


const styles = StyleSheet.create({
    cartButton: {
        backgroundColor: '#20161f',
        padding: 0,
        marginTop: 45,
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 24,
        fontWeight: "bold",
        backfaceVisibility: "visible"
    },
    cartButtonText: {
        color: '#db924b',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default CartButton;
