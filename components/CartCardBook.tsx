import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { useCart } from '../hooks/useCart';
import PropTypes  from "prop-types";

const CartCardBook = ({ title, price, id}) => {
    const { removeFromCart } = useCart();
    return (
        <View style={{flexDirection: 'row', alignItems: 'center', borderRadius:8, borderWidth: 1, padding: 10}}>
            <Text>{title}</Text>
            <Text style={{ textAlign: 'center'}}>${price}</Text>
            <TouchableOpacity
                style={{ padding:5, backgroundColor: 'red', borderRadius: 5}}
                onPress={() => removeFromCart(id)}
            >
                <Text>X</Text>
            </TouchableOpacity>
        </View>
    );
};


CartCardBook.propTypes = {
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired
};

export default CartCardBook;