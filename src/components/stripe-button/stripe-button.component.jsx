import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({price}) => {
    const priceInPaise  = price * 100;
    const publishKey = "";

    const onToken = token => {
        console.log(token);
        alert('Successful');
    }

    return (
        <StripeCheckout
            label = 'Buy Now'
            name = 'Reuse Store'
            billingAddress
            shippingAddress
            currency = 'INR'
            image = ''
            amount = {priceInPaise}
            description = {`Your total price is $${price}`}
            panelLabel = 'Pay Now'
            allowRememberMe
            token = {onToken}
            stripeKey = {publishKey}
        />
    )
}

export default StripeButton;