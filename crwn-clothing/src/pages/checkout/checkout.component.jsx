import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './checkout.styles.scss';

import { selectCartItems, selectorCartTotal } from '../../redux/cart/cart.selectors'

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
            item.name
        ))}
        <div className='total'>
            <span>TOTAL: ${total}</span>
        </div>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectorCartTotal
});

export default connect(mapStateToProps)(Checkout);