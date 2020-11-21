import React from 'react';
import { gql } from 'apollo-boost';
import { Mutation, Query } from 'react-apollo';

import CartDropdownComponent from './cart-dropdown.component';


const TOGGLE_CART_HIDDEN = gql`
    mutation ToggleCartHidden {
        toggleCartHidden @client
    }
`;

const GET_CART_ITEMS = gql`
    {
        cartItems @client
    }
`;


const CartDropwDownContainer = (props) => (
    <Mutation mutation={TOGGLE_CART_HIDDEN}>
        {
            toggleCartHidden => (
                <Query query={GET_CART_ITEMS}>
                    {
                        ({ data }) => {
                            const { cartItems } = data;
                            return <CartDropdownComponent
                                    cartItems={cartItems}
                                    toggleCartHidden={toggleCartHidden}
                                    {...props}
                                />
                        }
                    }
                </Query>
            )
        }
    </Mutation>
);

export default CartDropwDownContainer;