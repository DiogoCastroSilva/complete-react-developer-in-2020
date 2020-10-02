import React from 'react';

import './checkout-item.styles.scss';


const CheckoutItem = ({item: { name, quantity, price, imageUrl }}) => (
    <div className='checkout-item'>
        <div className='image-container'>
            <img src={imageUrl} alt='item-image' />
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>{quantity}</span>
        <span className='price'>{price}</span>
        <span className='remove-button'>&#10005;</span>
    </div>
);

export default CheckoutItem;