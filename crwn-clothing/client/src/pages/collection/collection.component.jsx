import React from 'react';

import {
    CollectionContainer,
    TitleContainer,
    ItemsContainer
} from './collection.styles';

import CollectionItemContainer from '../../containers/collection-item.container';


const Collection = ({ collection: { title, items } }) => (
    <CollectionContainer>
        <TitleContainer>{ title }</TitleContainer>
        <ItemsContainer>
            {items.map(item => (
                <CollectionItemContainer 
                    key={item.id}
                    item={item}
                />
            ))}
        </ItemsContainer>
    </CollectionContainer>
);

export default Collection;