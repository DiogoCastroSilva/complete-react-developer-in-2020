import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionsOverview from '../components/collections-overview/collections-overview.component';

import { selectCollectionsForPreview } from '../redux/shop/shop.selector';


const CollectionsOverviewContainer = ({ collections }) => (
    <CollectionsOverview collections={collections} />
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverviewContainer);