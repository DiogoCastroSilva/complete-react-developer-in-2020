// import SHOP_DATA from './shop.data';
import ShopActionTypes from './shop.types';

const INITIAL_STATE = {
    collections: null// SHOP_DATA
};

const shopReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ShopActionTypes.UPDATE_COLLECTIONS:
            return {
                collections: action.payload,
                ...state
            }
        default:
            return state;
    }
};

export default shopReducer;