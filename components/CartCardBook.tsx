import React, {useState} from 'react';
import {View, TouchableOpacity, GestureResponderEvent, StyleSheet, Pressable, ScrollView} from 'react-native';
import {Text, Button, List} from 'react-native-paper';
import useCart from '../hooks/useCart';
import PropTypes from "prop-types";
import {Link, router, useRouter} from "expo-router";
import {useExpoRouter} from "expo-router/build/global-state/router-store";


const CartCardBook = () => {
    const CartCardBook = ({book}) => {
        const router = useRouter();


    }
        const {clearCart, removeFromCart, cart} = useCart();
        const handleCloseModal = () => {
        }


        return (

            <View style={{
                flexDirection: 'column',
                alignItems: 'center',
                borderRadius: 8,
                borderWidth: 1,
                borderColor: '#db924b',
                padding: 10,
                maxWidth: '90vw'
            }}>

                {
                    cart.map(({price, title}) => {
                        return (
                            <TouchableOpacity
                                style={{margin: 5, backgroundColor: '#20161f', borderColor: '#db924b', borderWidth: 1,borderRadius: 5, width: '100%'}}>
                                <Pressable onPress={() => removeFromCart(title)}>
                                    <List.Item
                                        title={title}
                                        description={price}
                                        right={props =>
                                            <List.Icon {...props} icon="trash-can" color="#db924b"/>
                                        }
                                    >
                                    </List.Item>
                                </Pressable>
                            </TouchableOpacity>
                        )
                    })
                }

                <Text style={[styles.cartButtonText, {color: '#db924b'}, {padding: 30}]}> {cart.reduce((a, b) => b["price"] + a, 0)} USD</Text>
                <Pressable>
                    <Button style={[styles.cartButton, {flexDirection: 'column', backgroundColor: 'red'}]}
                            onPress={() => {
                                clearCart(cart);
                            }}
                            mode="contained">Clear Cart</Button>
                    </Pressable>
            <Pressable>
                    <Button style={[styles.cartButton, {flexDirection: 'column', backgroundColor: 'green'}]}
                            mode="contained"
                            onPress={() => {
                                router.push('/checkout');
                            }}>Checkout</Button>
            </Pressable>
            </View>


        )
            ;
    }
;


CartCardBook.propTypes = {
    title: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.number
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