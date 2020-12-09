import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Checkout from '../pages/checkout/checkout.component';
import { selectCartItems, selectorCartTotal } from '../redux/cart/cart.selectors'


const CheckoutContainer = ({ cartItems, total }) => (
    <Checkout
        cartItems={cartItems}
        total={total}
    />
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectorCartTotal
});

export default connect(mapStateToProps)(CheckoutContainer);