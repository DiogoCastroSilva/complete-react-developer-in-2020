import React from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

import Header from './header.component';


const GET_CLIENT_PROPERTIES = gql`
  {
    cartHidden @client
    currentUser @client
  }
`;

const HeaderContainer = () => (
    <Query query={GET_CLIENT_PROPERTIES}>
        {
            ({ data }) => {
                const { cartHidden, currentUser } = data;
                return <Header
                            hidden={cartHidden}
                            currentUser={currentUser}
                        />
            }
        }
    </Query>
);

export default HeaderContainer;