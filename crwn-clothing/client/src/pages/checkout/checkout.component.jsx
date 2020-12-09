import React from 'react';

import {
    CheckoutContainer,
    HeaderContainer,
    HeaderBlockContainer,
    TotalContainer,
    TextWarningContainer,
    StripeButtonContainer
} from './checkout.styles';

import CheckoutItemContainer from '../../containers/checkout-item.container';


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
            <CheckoutItemContainer
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



export default Checkout;