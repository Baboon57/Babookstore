import React, { useState } from 'react';
import { View, Button, Modal, Text, StyleSheet } from 'react-native';

const CartButton = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [cartItemsCount, setCartItemsCount] = useState(0);

    const openCartModal = () => {
        setIsModalVisible(true);
    };

    const closeCartModal = () => {
        setIsModalVisible(false);
    };

    return (
        <View>
            <Button title="Cart" onPress={openCartModal} />
            {cartItemsCount > 0 && (
                <View style={styles.badge}>
                    <Text style={styles.badgeText}>{cartItemsCount}</Text>
                </View>
            )}

            <Modal visible={isModalVisible} animationType="slide">
                <View style={styles.modalContent}>
                    <Text>Cart Modal Content</Text>
                    {/* Add your cart modal content here */}
                    <Button title="Close" onPress={closeCartModal} />
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    badge: {
        position: 'absolute',
        top: -6,
        right: -6,
        backgroundColor: 'red',
        borderRadius: 6,
        width: 12,
        height: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },
    badgeText: {
        color: 'white',
        fontSize: 10,
    },
    modalContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default CartButton;