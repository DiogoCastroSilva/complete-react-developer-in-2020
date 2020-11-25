import React from 'react';

import {
    CartIconContainer,
    ShoppingItemContainer,
    ItemCountContainer
} from './cart-icon.styles';


const CartIcon = ({ toggleCartHidden, itemsCount }) => (
    <CartIconContainer onClick={toggleCartHidden}>
        <ShoppingItemContainer />
        <ItemCountContainer>
            {itemsCount}
        </ItemCountContainer>
    </CartIconContainer>
);

export default CartIcon;