import React from 'react';
import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selector';

import {
    CollectionContainer,
    TitleContainer,
    ItemsContainer
} from './collection.styles';

import CollectionItem from '../../components/collection-item/collection-item.component';


const Collection = ({ collection: { title, items } }) => {
    return (
        <CollectionContainer>
            <TitleContainer>{ title }</TitleContainer>
            <ItemsContainer>
                {items.map(item => (
                    <CollectionItem 
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