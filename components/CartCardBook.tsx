import React, {useState} from 'react';
import {View, TouchableOpacity, GestureResponderEvent, StyleSheet, Pressable, ScrollView} from 'react-native';
import {Text, Button, List, IconButton} from 'react-native-paper';
import useCart from '../hooks/useCart';
import PropTypes from "prop-types";
import {useRouter} from "expo-router";
import {Book} from "@/components/BookCard";
import CartProvider from "@/providers/CartProvider";

const CartCardBook = ({setIsVisible}) => {
        const router = useRouter();
        const {clearCart, removeFromCart, cart} = useCart();


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
                    cart.map(({price, title, id}) => {
                        return (
                            <Pressable
                                style={{
                                    margin: 5,
                                    backgroundColor: '#20161f',
                                    borderColor: '#db924b',
                                    borderWidth: 1,
                                    borderRadius: 5,
                                    width: 250,
                                    maxWidth: 300
                                }}>

                                <List.Item
                                    title={<Text style={{color: '#db924b'}}>{title}</Text>}
                                    description={<Text style={{color: '#db924b'}}>{price} $</Text>}
                                    right={props =>
                                        <IconButton {...props} icon="trash-can" iconColor="#db924b" onPress={() => {
                                            console.log(title);
                                            removeFromCart(id);

                                        }}/>
                                    }
                                >
                                </List.Item>

                            </Pressable>
                        )
                    })
                }

                <Text
                    style={[styles.cartButtonText, {color: '#db924b'}, {padding: 30}]}> {cart.reduce((a, b) => b["price"] + a, 0)} USD</Text>
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
                                setIsVisible(false);
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