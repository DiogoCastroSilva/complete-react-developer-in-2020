import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import './cart-dropdown.styles.scss';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

const CartDropdown = ({ cartItems, history, dispatch }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {cartItems.length ?
                cartItems.map(item => (
                    <CartItem
                        key={item.id}
                        item={item}
                    />
                )) :
                <span className='empty-message'>Your cart is empty</span>
            }
        </div>
        <CustomButton
            onClick={() => {
                history.push('/checkout');
                dispatch(toggleCartHidden());
            }}
        >
            GO TO CHECKOUT
        </CustomButton>
    </div>
);

const mapStateToProps = state => {
    return {
        cartItems: selectCartItems(state)
    };
};

export default withRouter(connect(mapStateToProps)(CartDropdown));