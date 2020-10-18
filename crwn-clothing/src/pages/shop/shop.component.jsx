import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import Collection from '../collection/collection.component';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

import WithSpinner from '../../components/with-spinner/with-spinner.component';
import { createStructuredSelector } from 'reselect';
import { selectIsCollectionLoaded, selectorCollectionFetching } from '../../redux/shop/shop.selector';


const CollectionOverViewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionWithSpinner = WithSpinner(Collection);

class Shop extends Component {

    componentDidMount() {
        const { fetchCollectionsStart } = this.props;
        fetchCollectionsStart();       
    }

    render() {
        const { match, isCollectionsFetching, isCollectionLoaded } = this.props;

        return (
            <div>
                <Route
                    exact
                    path={`${match.path}`}
                    render={(props) =>
                        <CollectionOverViewWithSpinner
                            isLoading={isCollectionsFetching}
                            {...props}
                        />
                    }
                />
                <Route
                    path={`${match.path}/:collectionId`}
                    render={(props) =>
                        <CollectionWithSpinner
                            isLoading={!isCollectionLoaded}
                            {...props}
                        />
                    }
                />
            </div>
        );
    }
};


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
)(Shop);