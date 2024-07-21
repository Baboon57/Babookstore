import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import useCart from '../hooks/useCart';
import PropTypes  from "prop-types";
import {Button} from "react-native-paper";

const CartCardBook = () => {
    const { removeFromCart,cart } = useCart();
    return (
        <View style={{flexDirection: 'column', alignItems: 'center', borderRadius:8, borderWidth: 1, padding: 10}}>

            {
                cart.map((book) => {
                    return (
                <TouchableOpacity
                style={{ padding:5, backgroundColor: 'red', borderRadius: 5}}
        >
            <Text>{book.title}</Text>
            <Text style={{ textAlign: 'center'}}>${book.price}</Text>


        </TouchableOpacity>
                    )
                }
                )
            }
            <Button  mode="contained"  >Clear Cart</Button>
            {cart.reduce((a, b) => a + b.price, 0)}
            <Button  mode="contained"  >Checkout</Button>
            <Button  mode="contained"  >Close Cart</Button>

        </View>

    );
};


CartCardBook.propTypes = {
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired
};

export default CartCardBook;