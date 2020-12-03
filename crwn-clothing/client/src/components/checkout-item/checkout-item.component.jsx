import React from 'react';

import {
    CheckoutItemContainer,
    ImageContainer,
    TextContainer,
    QuantityContainer,
    RemoveButtonContainer
} from './checkout-item.styles';


const CheckoutItem = ({ item, removeItem, addItem, clearItem }) => {
    const { name, quantity, price, imageUrl } = item;
    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt='item' />
            </ImageContainer>
            <TextContainer>{name}</TextContainer>
            <QuantityContainer>
                <div
                    onClick={() => removeItem(item)}
                >
                    &#10094;
                </div>
                <span>{quantity}</span>
                <div
                    onClick={() => addItem(item)}
                >
                    &#10095;
                </div>
            </QuantityContainer>
            <TextContainer>{price}</TextContainer>
            <RemoveButtonContainer
                className='remove-button'
                onClick={() => clearItem(item)}
            >
                &#10005;
            </RemoveButtonContainer>
        </CheckoutItemContainer>
    );
};

export default CheckoutItem;