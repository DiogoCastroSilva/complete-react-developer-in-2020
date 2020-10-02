import React from 'react';
import { connect } from 'react-redux';
import { removeItem } from '../../redux/cart/cart.actions';

import './checkout-item.styles.scss';


const CheckoutItem = ({ item, removeItem }) => {
    const { name, quantity, price, imageUrl } = item;
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt='item-image' />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>{quantity}</span>
            <span className='price'>{price}</span>
            <span className='remove-button' onClick={() => removeItem(item)}>&#10005;</span>
        </div>
    );
};

const matDispatchToProps = dispatch => {
    return {
        removeItem: item => dispatch(removeItem(item))
    }
};

export default connect(null, matDispatchToProps)(CheckoutItem);