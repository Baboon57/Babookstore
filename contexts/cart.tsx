import {createContext} from "react";

export interface CartI {
    id: number;
    title: string;
    price: number;
}


const CartContext = createContext({
    cart: [],
    addToCart: (item: CartI) => {},
    removeFromCart: (id: number) => {},
    clearCart: () => {},
});

export default CartContext;