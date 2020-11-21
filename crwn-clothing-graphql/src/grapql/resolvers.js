import { gql } from 'apollo-boost';
import {
    addItemToCart,
    getCartTotal,
    getItemsCount,
    removeItemFromCart,
    clearItemFromCart
} from './cart.utils';


export const typeDefs = gql`
    extend type Item {
        quantity: Int
    }


    extend type Mutation {
        ToggleCartHidden: Boolean!
        AddItemToCart(item: Item!): [Item]!
    }
`;

export const GET_CART_HIDDEN = gql`
    {
        cartHidden @client
    }
`;

export const GET_CART_ITEMS = gql`
    {
        cartItems @client
    }
`;

export const GET_ITEMS_COUNT = gql`
    {
        itemsCount @client
    }
`;

const GET_CART_TOTAL = gql`
  {
    cartTotal @client
  }
`;

const GET_CURRENT_USER = gql`
  {
    currentUser @client
  }
`;

const updateCartItemsRelatedQueries = (cache, newCartItems) => {
    cache.writeQuery({
      query: GET_ITEMS_COUNT,
      data: { itemsCount: getItemsCount(newCartItems) }
    });
  
    cache.writeQuery({
      query: GET_CART_TOTAL,
      data: { cartTotal: getCartTotal(newCartItems) }
    });
  
    cache.writeQuery({
      query: GET_CART_ITEMS,
      data: { cartItems: newCartItems }
    });
  };

export const resolvers = {
    Mutation: {
        toggleCartHidden: (_root, _args, { cache }) => {
            const { cartHidden } = cache.readQuery({
                query: GET_CART_HIDDEN
            });

            cache.writeQuery({
                query: GET_CART_HIDDEN,
                data: { cartHidden: !cartHidden }
            });

            return !cartHidden;
        },
        
        addItemToCart: (_root, { item }, { cache }) => {
            const { cartItems } = cache.readQuery({
                query: GET_CART_ITEMS
            });

            const newCartItems = addItemToCart(cartItems, item);

            updateCartItemsRelatedQueries(cache, newCartItems);

            return newCartItems;
        },

        removeItemFromCart: (_root, { item }, { cache }) => {
          const { cartItems } = cache.readQuery({
            query: GET_CART_ITEMS
          });
    
          const newCartItems = removeItemFromCart(cartItems, item);
    
          updateCartItemsRelatedQueries(cache, newCartItems);
    
          return newCartItems;
        },

        clearItemFromCart: (_root, { item }, { cache }) => {
            const { cartItems } = cache.readQuery({
              query: GET_CART_ITEMS
            });
      
            const newCartItems = clearItemFromCart(cartItems, item);
      
            updateCartItemsRelatedQueries(cache, newCartItems);
      
            return newCartItems;
          },
      
          setCurrentUser: (_root, { user }, { cache }) => {
            cache.writeQuery({
              query: GET_CURRENT_USER,
              data: { currentUser: user }
            });
      
            return user;
          }
    }
};