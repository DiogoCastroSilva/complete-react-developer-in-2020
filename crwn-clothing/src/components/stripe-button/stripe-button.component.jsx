import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({ price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_live_emn24VPW77CMaoYbMNskwSON005bhLVmV2';

    const onToken = token => {
        console.log(token);
        alert('Payment successfull');
    };

    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeButton;