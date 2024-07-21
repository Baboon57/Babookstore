import { createContext } from 'react';
import {Book} from "@/components/BookCard";

const CartContext = createContext({
    cart: [],
    addToCart: (book: Book) => {},
    removeFromCart: (book: Book) => {},
    clearCart: () => {},
});

export default CartContext;