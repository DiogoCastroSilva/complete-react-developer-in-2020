import React from 'react';
import { connect } from 'react-redux';

import {
    CheckoutItemContainer,
    ImageContainer,
    TextContainer,
    QuantityContainer,
    RemoveButtonContainer
} from './checkout-item.styles';

import { clearItem, removeItem, addItem } from '../../redux/cart/cart.actions';


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

const matDispatchToProps = dispatch => {
    return {
        removeItem: item => dispatch(removeItem(item)),
        addItem: item => dispatch(addItem(item)),
        clearItem: item => dispatch(clearItem(item))
    }
};

export default connect(null, matDispatchToProps)(CheckoutItem);