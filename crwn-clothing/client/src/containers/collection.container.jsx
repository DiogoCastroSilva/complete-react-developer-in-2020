import React from 'react';
import { connect } from 'react-redux';

import Collection from '../pages/collection/collection.component';
import { selectCollection } from '../redux/shop/shop.selector';

const CollectionContainer = ({ collection }) => (
    <Collection collection={collection} />
);

const mapStateToProps = (state, ownProps) => {
    return {
        collection: selectCollection(ownProps.match.params.collectionId)(state)
    };
};

export default connect(mapStateToProps)(CollectionContainer);