import React from 'react';
import { Mutation, Query } from 'react-apollo';
import { gql } from 'apollo-boost';

import { GET_ITEMS_COUNT } from '../../grapql/resolvers';

import CartIcon from './cart-icon.component';


const TOGGLE_CART_HIDDEN = gql`
    mutation ToggleCartHidden {
        toggleCartHidden @client
    }
`;


const CartIconContainer = () => (
    <Query query={GET_ITEMS_COUNT}>
        {
            ({ data }) => {
                const { itemsCount } = data;
                return (
                    <Mutation mutation={TOGGLE_CART_HIDDEN}>
                        {
                            toggleCartHidden =>
                                <CartIcon
                                    toggleCartHidden={toggleCartHidden}
                                    itemsCount={itemsCount}
                                />
                        }
                    </Mutation>
                );
            }
        }
    </Query>
);

export default CartIconContainer;