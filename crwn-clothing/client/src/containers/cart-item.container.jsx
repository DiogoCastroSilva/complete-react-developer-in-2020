import React from 'react';
import { connect } from 'react-redux';

import { selectCartItemsCount } from '../redux/cart/cart.selectors';
import { toggleCartHidden } from '../redux/cart/cart.actions';

import CartIcon from '../components/cart-icon/cart-icon.component';



const CartItemContainer = ({ itemsCount, toggleCartHidden }) => (
    <CartIcon
        itemsCount={itemsCount}
        toggleCartHidden={toggleCartHidden}
    />
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

export default connect(mapStateToProps, mapDispatchToProps)(CartItemContainer);