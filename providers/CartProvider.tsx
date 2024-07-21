import {useReducer} from 'react';
import CartContext from "../contexts/cart";
import PropTypes from "prop-types";

function cartReducer(state : any, action : any) {
    switch (action.type) {
        case 'ADD_TO_CART':
            return [...state, action.payload];
        case 'REMOVE_ROM_CART' : {
            const index = state.findIndex((book: { id: any; }) => book.id === action.payload);
            if (index === -1) {
                return state;
            }
            const copy = [...state];
            copy.splice(index, 1);
            return copy;
        }
        case 'CLEAR_CART':
            return [];
        default:
            return state;
    }
}

function CartProvider({ children }) {
    const [state, dispatch] = useReducer(cartReducer, []);
    return (
        <CartContext.Provider
            value={{
                cart: state,
                addToCart: (book : any) => {
                    dispatch({type: 'ADD_TO_CART', payload: book});
                },
                removeFromCart: (bookId : any) => {
                    dispatch({type: 'REMOVE_ROM_CART', payload: bookId});
                },
                clearCart: () => {
                    dispatch({type: 'CLEAR_CART'});
                },
            }}
        >
            {children}
        </CartContext.Provider>
    );
}
CartProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default CartProvider;