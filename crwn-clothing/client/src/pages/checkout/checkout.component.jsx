import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
    CheckoutContainer,
    HeaderContainer,
    HeaderBlockContainer,
    TotalContainer,
    TextWarningContainer,
    StripeButtonContainer
} from './checkout.styles';

import { selectCartItems, selectorCartTotal } from '../../redux/cart/cart.selectors'
import CheckoutItem from '../../components/checkout-item/checkout-item.component';


const Checkout = ({ cartItems, total }) => (
    <CheckoutContainer>
        <HeaderContainer>
            <HeaderBlockContainer>
                <span>Product</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Description</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Quantity</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Price</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Remove</span>
            </HeaderBlockContainer>
        </HeaderContainer>
        {cartItems.map(item => (
            <CheckoutItem
                key={item.id}
                item={item}
            />
        ))}
        <TotalContainer>
            <span>TOTAL: ${total}</span>
            <TextWarningContainer>
                *Please use the following credic card for payments*
                <br />
                4242 4242 4242 4242 - Exp: 01/{(new Date().getFullYear() + 1).toString().substr(-2)} - CVV: 123
            </TextWarningContainer>
            <StripeButtonContainer price={total} />
        </TotalContainer>
    </CheckoutContainer>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectorCartTotal
});

export default connect(mapStateToProps)(Checkout);