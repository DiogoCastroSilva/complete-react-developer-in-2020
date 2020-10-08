import React from 'react';
import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selector';

import {
    CollectionContainer,
    TitleContainer,
    ItemsContainer,
} from './collection.styles';


const Collection = ({ collection }) => {
    const { title, items } = collection;
    return (
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
}

const mapStateToProps = (state, ownProps) => {
    return {
        collection: selectCollection(ownProps.match.params.collectionId)(state)
    };
};

export default connect(mapStateToProps)(Collection);