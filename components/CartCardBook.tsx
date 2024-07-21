import React from 'react';
import {View, TouchableOpacity, GestureResponderEvent} from 'react-native';
import {Text, Button, List} from 'react-native-paper';
import useCart from '../hooks/useCart';
import PropTypes from "prop-types";


const CartCardBook = () => {
    const {removeFromCart, cart} = useCart();
    return (
        <View style={{flexDirection: 'column', alignItems: 'center', borderRadius: 8, borderWidth: 1, padding: 10}}>

            {
                cart.map(({price, title}) => {
                        return (
                            <TouchableOpacity style={{padding: 5, backgroundColor: 'red', borderRadius: 5}}>
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
                    }
                )
            }

<Text> {cart.reduce((a, b) => b["price"] + a, 0)} </Text>
<Button mode="contained">Clear Cart</Button>
<Button mode="contained">Checkout</Button>
<Button mode="contained">Close Cart</Button>

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