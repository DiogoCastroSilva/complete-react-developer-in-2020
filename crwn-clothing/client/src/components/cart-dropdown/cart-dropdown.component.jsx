import React from 'react';

import {
    CartDropdownContainer, CartItemsContainer,
    EmptyMessageContainer, CartDropdownButtonContainer
} from './cart-dropdown.styles';

import CartItem from '../cart-item/cart-item.component';


const CartDropdown = ({ cartItems, handleClick }) => (
    <CartDropdownContainer>
        <CartItemsContainer>
            {cartItems.length ?
                cartItems.map(item => (
                    <CartItem
                        key={item.id}
                        item={item}
                    />
                )) :
                <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
            }
        </CartItemsContainer>
        <CartDropdownButtonContainer
            onClick={handleClick}
        >
            GO TO CHECKOUT
        </CartDropdownButtonContainer>
    </CartDropdownContainer>
);

export default CartDropdown;