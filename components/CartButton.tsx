import React, {useState} from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
import {Modal as BisModal} from "react-native";
import {Button, Text} from 'react-native-paper';
import {contain} from "@hapi/hoek";

interface CartButtonProps<CartButtonProps> {
    onPress: () => void;
}

const CartButton: React.FC = () => {
    // const navigation = useNavigation();
    const [isVisible, setIsVisible] = useState(false);

    const handleCartPress = () => {
        setIsVisible(true);
    };
    const handleCloseModal = () => {
        setIsVisible(false);
    }
    return (
        <>
        <TouchableOpacity style={styles.cartButton} onPress={handleCartPress}>
            <Text  style={{
                fontSize: styles.cartButton.fontSize,
                fontWeight: styles.cartButton.fontWeight,
                color: styles.cartButtonText.color,
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
            <View style={styles.cartButton}>
                <Text variant="displayLarge" style={styles.cartButtonText}>CartTest</Text>
                <Button  mode="contained" style={styles.cartButton} onPress={(handleCloseModal)}>Close Cart</Button>
            </View>
        </BisModal>
    </>
    )
};

const styles = StyleSheet.create({
    cartButton: {
        backgroundColor: '#db924b',
        padding: 0,
        marginTop: 40,
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 24,
        fontWeight: "bold",
        backfaceVisibility: "visible"
    },
    cartButtonText: {
        color: '#20161f',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default CartButton;
