import React, { useState, useEffect } from 'react';

import CartContext from '../../context/cart/cart.context';

import {
    addItemToCart,
    removeItemFromCart,
    filterItemFromCart,
    getCartItemsCount,
    getCartItemsTotalPrice
} from '../cart/cart.utils';


const CartProvider = ({ children }) => {
    const [hidden, setHidden] = useState(true);
    const [cartItems, setCartItems] = useState([]);
    const [cartItemsCount, setCartItemsCount] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        setCartItemsCount(getCartItemsCount(cartItems));
        setTotal(getCartItemsTotalPrice(cartItems));
    }, [cartItems]);

    const toggleHidden = () => setHidden(!hidden);
    const addItem = item => setCartItems(addItemToCart(cartItems, item));
    const removeItem = item => setCartItems(removeItemFromCart(cartItems, item));
    const clearItemFromCart = item => setCartItems(filterItemFromCart(cartItems, item));

    return (
        <CartContext.Provider
            value={{
                hidden,
                toggleHidden,
                cartItems,
                addItem,
                cartItemsCount,
                removeItem,
                clearItemFromCart,
                total
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;