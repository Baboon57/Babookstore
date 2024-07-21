import React, {useState} from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import Modal from 'react-native-modal';
import {Modal} from "react-native";
import {Text} from 'react-native-paper';

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
            <Text style={styles.cartButtonText}>Cart</Text>
        </TouchableOpacity>
        <Modal
            animationType="slide" // Choose an animation type ('slide', 'fade', 'none')
            transparent={true} // Set modal to be transparent
            visible={isVisible} // Control modal visibility based on state
            onRequestClose={handleCloseModal} // Function to call when user requests to close modal
            >
            <View style={{
                paddingTop: 40,
            }

            }> <Text variant="displayLarge">CartTest</Text></View>
        </Modal>
    </>
    )
};

const styles = StyleSheet.create({
    cartButton: {
        backgroundColor: '#007bff',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cartButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default CartButton;
