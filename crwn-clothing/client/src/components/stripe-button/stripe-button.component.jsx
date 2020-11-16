import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeButton = ({ price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51GsQlAAxJTVl3mJaCeYOLbetzpqvxgi8BlqBZfo5PmnAudCnVPXNsI8AQ9AGg8fMKylVKKoqGS8mF16GwKS6ootJ00JvpHFMQi';

    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token: token
            }
        }).then(response => {
            alert('Payment successful')
        }).catch(error => {
            console.error(`Payment error: ${JSON.stringify(error)}`);
            alert('There was an inssue with your payment. Please make sure you use the provided credit card.');
        });
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