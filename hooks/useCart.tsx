import { useContext } from 'react';
import { CartContext } from '@/providers/CartProvider';

export const useCart = () => {
    const { cart, addToCart } = useContext(CartContext);

    return { cart, addToCart };
};