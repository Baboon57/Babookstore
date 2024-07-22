import React, {useState} from 'react';
import {View, TouchableOpacity, GestureResponderEvent, StyleSheet, Pressable, ScrollView} from 'react-native';
import {Text, Button, List} from 'react-native-paper';
import useCart from '../hooks/useCart';
import PropTypes from "prop-types";

const CartCardBook = () => {
    const {clearCart,cart} = useCart();
    const handleCloseModal = () => {
        setIsVisible(false);
    }


        return (

            <View style={{
                flexDirection: 'column',
                alignItems: 'center',
                width: '75vw',
                borderRadius: 8,
                borderWidth: 1,
                padding: 10
            }}>

                {
                    cart.map(({price, title}) => {
                            return (
                                <TouchableOpacity style={{margin: 5, backgroundColor: '#20161f', borderRadius: 5, width: '100%'}}>
                                    <List.Item
                                        title={title}
                                        description={price}
                                        right={props =>
                                            <List.Icon {...props}
                                                       icon="trash-can"
                                            >
                                            </List.Icon>
                                        }
                                    >
                                    </List.Item>
                                </TouchableOpacity>
                            )
                        })
                }

                <Text style={[styles.cartButtonText, {padding: 30}]}> {cart.reduce((a, b) => b["price"] + a, 0)} USD</Text>
                <Pressable>
                    <Button style={[styles.cartButton, {flexDirection: 'column', backgroundColor: 'red'}]}
                            onPress={() => {clearCart(cart);}}
                            mode="contained">Clear Cart</Button>
                    <Button style={[styles.cartButton, {flexDirection: 'column', backgroundColor: 'green'}]}
                            mode="contained">Checkout</Button>
                </Pressable>
            </View>


        )
            ;
    }
;


CartCardBook.propTypes = {
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired
};

export default CartCardBook;

const styles = StyleSheet.create({
    cartButton: {
        backgroundColor: '#db924b',
        padding: 0,
        margin: 5,
        width: 125,
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