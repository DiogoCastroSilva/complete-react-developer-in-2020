export const addItemToCart = (cartItems, cartItemToAdd) => {
    const exixtingCartItem = cartItems.find(item => item.id === cartItemToAdd.id);

    if (exixtingCartItem) {
        return cartItems.map(cartItem => 
            cartItem.id === cartItemToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        );
    } else {
        return [ ...cartItems, { ...cartItemToAdd, quantity: 1 }]
    }
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const exixtingCartItem = cartItems.find(item => item.id === cartItemToRemove.id);

    if (exixtingCartItem.quantity === 1) {
        return cartItems.filter(
            cartItem => cartItem.id !== cartItemToRemove.id
        );
    }

    return cartItems.map(cartItem =>
        cartItem.id === cartItemToRemove.id
            ? { ...cartItem, quantity: cartItemToRemove.quantity - 1 }
            : cartItem
    );
};