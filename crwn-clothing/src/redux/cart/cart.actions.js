import CartActionTypes from './cart.types';


export const toggleCartHidden = () => {
    return {
        type: CartActionTypes.TOGGLE_CART_HIDDEN
    }
};

export const addItem = item => {
    return {
        type: CartActionTypes.ADD_ITEM,
        payload: item
    };
};

export const removeItem = item => {
    return {
        type: CartActionTypes.REMOVE_ITEM,
        payload: item
    };
};

export const clearItem = item => {
    return {
        type: CartActionTypes.CLEAR_ITEM,
        payload: item
    }
};

export const clearCart = () => {
    return {
        type: CartActionTypes.CLEAR_CART
    };
};