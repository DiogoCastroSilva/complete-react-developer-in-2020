import React from 'react';

import {
    CartItemContainer,
    ImageContainer,
    ImageDetailsContainer
} from './cart-item.styles';


const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
    <CartItemContainer>
        <ImageContainer
            src={imageUrl}
            alt='item'
        />
        <ImageDetailsContainer>
            <span>{name}</span>
            <span>
                {quantity} x ${price}
            </span>
        </ImageDetailsContainer>
    </CartItemContainer>
);

export default CartItem;