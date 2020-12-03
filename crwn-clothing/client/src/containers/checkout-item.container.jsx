import React from 'react';
import { connect } from 'react-redux';

import { addItem, clearItem, removeItem } from '../redux/cart/cart.actions';

import CheckoutItem from '../components/checkout-item/checkout-item.component';


const CheckoutItemContainer = ({ item, removeItem, addItem, clearItem}) => (
    <CheckoutItem
        item={item}
        removeItem={removeItem}
        addItem={addItem}
        clearItem={clearItem}
    />
);

const matDispatchToProps = dispatch => {
    return {
        removeItem: item => dispatch(removeItem(item)),
        addItem: item => dispatch(addItem(item)),
        clearItem: item => dispatch(clearItem(item))
    }
};

export default connect(null, matDispatchToProps)(CheckoutItemContainer);