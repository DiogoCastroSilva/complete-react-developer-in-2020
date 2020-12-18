import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { fetchCollectionsStart } from '../redux/shop/shop.actions';
import { selectIsCollectionLoaded, selectorCollectionFetching } from '../redux/shop/shop.selector';
import Shop from '../pages/shop/shop.component';


const ShopContainer = ({
    isCollectionsFetching,
    isCollectionLoaded,
    fetchCollectionsStart,
    ...rest
}) => (
    <Shop
        isCollectionLoaded={isCollectionLoaded}
        isCollectionsFetching={isCollectionsFetching}
        fetchCollectionsStart={fetchCollectionsStart}
        {...rest}
    />
);

const mapStateToProps = createStructuredSelector({
    isCollectionsFetching: selectorCollectionFetching,
    isCollectionLoaded: selectIsCollectionLoaded
});

 const mapDispatchToProps = dispatch => {
    return {
        // fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
        fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShopContainer);