import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import {
    CartDropdownContainer, CartItemsContainer,
    EmptyMessageContainer, CartDropdownButtonContainer
} from './cart-dropdown.styles';

import CartItem from '../cart-item/cart-item.component';

import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

const CartDropdown = ({ cartItems, history, dispatch }) => (
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
            onClick={() => {
                history.push('/checkout');
                dispatch(toggleCartHidden());
            }}
        >
            GO TO CHECKOUT
        </CartDropdownButtonContainer>
    </CartDropdownContainer>
);

const mapStateToProps = state => {
    return {
        cartItems: selectCartItems(state)
    };
};

export default withRouter(connect(mapStateToProps)(CartDropdown));