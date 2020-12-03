import React from 'react';

import {
    CollectionItemContainer,
    BackgroundImageContainer,
    CollectionFooterContainer,
    NameContainer,
    PriceContainer,
    AddToCartButton
} from './collection-item.styles';


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

export default CollectionItem;