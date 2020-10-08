import React from 'react';
import { connect } from 'react-redux';

import {
    CartItemContainer,
    ShoppingItemContainer,
    ItemCountContainer
} from './cart-icon.styles';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

const CartIcon = ({ toggleCartHidden, itemsCount }) => (
    <CartItemContainer onClick={toggleCartHidden}>
        <ShoppingItemContainer />
        <ItemCountContainer>
            {itemsCount}
        </ItemCountContainer>
    </CartItemContainer>
);

const mapDispatchToProps = dispatch => {
    return {
        toggleCartHidden: () => dispatch(toggleCartHidden())
    };
};

const mapStateToProps = state => {
    return {
        itemsCount: selectCartItemsCount(state)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);