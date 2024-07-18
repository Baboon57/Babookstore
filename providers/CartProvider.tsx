import React, { createContext, useState } from 'react';

export const CartContext = createContext<{
    cart: any[];
    addToCart: (item: any) => void;
}>({
    cart: [],
    addToCart: () => {},
});

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState<any[]>([]);

    const addToCart = (item) => {
        setCart((prevCart) => [...prevCart, item]);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart }}>
            {children}
        </CartContext.Provider>
    );
};