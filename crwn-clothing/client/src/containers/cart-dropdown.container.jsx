import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { selectCartItems } from '../redux/cart/cart.selectors';
import { toggleCartHidden } from '../redux/cart/cart.actions';
import CartDropdown from '../components/cart-dropdown/cart-dropdown.component';



const CartDropdownContainer = ({ cartItems, dispatch, history }) => (
    <CartDropdown
        cartItems={cartItems}
        handleClick={() => {
            history.push('/checkout');
            dispatch(toggleCartHidden());
        }}
    />
);

const mapStateToProps = state => {
    return {
        cartItems: selectCartItems(state)
    };
};

export default withRouter(connect(mapStateToProps)(CartDropdownContainer));