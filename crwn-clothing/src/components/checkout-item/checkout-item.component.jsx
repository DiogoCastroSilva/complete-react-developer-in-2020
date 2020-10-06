import React from 'react';
import { connect } from 'react-redux';

import './checkout-item.styles.scss';

import { clearItem, removeItem, addItem } from '../../redux/cart/cart.actions';


const CheckoutItem = ({ item, removeItem, addItem, clearItem }) => {
    const { name, quantity, price, imageUrl } = item;
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt='item' />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div
                    onClick={() => removeItem(item)}
                    className='arrow'
                >
                    &#10094;
                </div>
                <span className='value' >
                    {quantity}
                </span>
                <div
                    onClick={() => addItem(item)}
                    className='arrow'
                >
                    &#10095;
                </div>
            </span>
            <span className='price'>{price}</span>
            <span
                className='remove-button'
                onClick={() => clearItem(item)}
            >
                &#10005;
            </span>
        </div>
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