import CartContext, {CartI} from "@/contexts/cart";
import React, {useContext, useState} from 'react';
import {state} from "sucrase/dist/types/parser/traverser/base";


export default function CartProvider({
 children,
}: {
    children: React.ReactNode;
}) {
    const [cart, setCart] = useState<CartI[]>([]);

    return (
        <CartContext.Provider value={{
            cart: cart,
            addToCart: (item: CartI) => setCart((prevCart) => [...prevCart, item]),
            removeFromCart: (id: number) => setCart((prevCart) => prevCart.filter((item) => item.id !== id)),
            clearCart: () => setCart([])
        }}>
            {children}
        </CartContext.Provider>
    );
};