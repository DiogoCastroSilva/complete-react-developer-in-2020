import React from 'react';
import { connect } from 'react-redux';

import {
    CollectionItemContainer,
    BackgroundImageContainer,
    CollectionFooterContainer,
    NameContainer,
    PriceContainer,
    AddToCartButton
} from './collection-item.styles';

import { addItem } from '../../redux/cart/cart.actions';


const CollectionItem = ({ item, addItem }) => {
    const { name, price, imageUrl } = item;
    return (
        <CollectionItemContainer>
            <BackgroundImageContainer imageUrl={imageUrl} />
            <CollectionFooterContainer>
                <NameContainer>{name}</NameContainer>
                <PriceContainer>{price}</PriceContainer>
            </CollectionFooterContainer>
            <AddToCartButton
                color='inverted'
                onClick={() => addItem(item)}
            >
                Add To Cart
            </AddToCartButton>
        </CollectionItemContainer>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        addItem: item => dispatch(addItem(item))
    };
};

export default connect(null, mapDispatchToProps)(CollectionItem);