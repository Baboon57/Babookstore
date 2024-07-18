import React, { useState } from 'react';
import { Modal, Text, Button, View, FlatList } from 'react-native';
import { useCart } from '@/hooks/useCart';

const Cart = () => {
    const { cart, addToCart } = useCart();
    const [modalVisible, setModalVisible] = useState(false);

    const checkout = () => {
        // Placeholder checkout logic
        console.log('Checkout clicked');
        console.log('Processing checkout...');
        console.log('Redirecting to payment gateway...');
        console.log('Order placed successfully!');
        // Clear the cart after checkout
        clearCart();
    };

    const clearCart = () => {
        // Placeholder clear cart logic
        console.log('Clear Cart clicked');
        console.log('Removing all items from the cart...');
        console.log('Cart cleared successfully!');
    };

    return (
        <View>
            <Button title="Open Cart" onPress={() => setModalVisible(true)} />
            <Modal visible={modalVisible} animationType="slide">
                <View>
                    <Text>Cart Items:</Text>
                    <FlatList
                        data={cart}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => <Text>{item.title}</Text>}
                    />
                    <Button title="Checkout" onPress={checkout} />
                    <Button title="Clear Cart" onPress={clearCart} />
                    <Button title="Close" onPress={() => setModalVisible(false)} />
                </View>
            </Modal>
        </View>
    );
};

export default Cart;