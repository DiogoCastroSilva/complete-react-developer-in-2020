import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './checkout.styles.scss';

import { selectCartItems, selectorCartTotal } from '../../redux/cart/cart.selectors'
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeButton from '../../components/stripe-button/stripe-button.component';

const Checkout = ({ cartItems, total }) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>
        {cartItems.map(item => (
            <CheckoutItem
                key={item.id}
                item={item}
            />
        ))}
        <div className='total'>
            <span>TOTAL: ${total}</span>
            <div className='test-warning'>
                *Please use the following credic card for payments*
                <br />
                4242 4242 4242 4242 - Exp: 01/{(new Date().getFullYear() + 1).toString().substr(-2)} - CVV: 123
            </div>
            <StripeButton price={total} />
        </div>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectorCartTotal
});

export default connect(mapStateToProps)(Checkout);