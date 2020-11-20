import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

import { GET_CART_HIDDEN } from '../../grapql/resolvers'

import Header from './header.component';


const HeaderContainer = () => (
    <Query query={GET_CART_HIDDEN}>
        {
            ({ data }) => {
                const { cartHidden } = data;
                return <Header hidden={cartHidden} />
            }
        }
    </Query>
);

export default HeaderContainer;