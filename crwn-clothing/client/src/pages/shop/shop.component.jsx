import React, { useEffect, Suspense, lazy } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Spinner from '../../components/spinner/spinner.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

import { selectIsCollectionLoaded, selectorCollectionFetching } from '../../redux/shop/shop.selector';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

const CollectionsOverview = lazy(() => import('../../components/collections-overview/collections-overview.component'));
const Collection = lazy(() => import('../collection/collection.component'));
const CollectionOverViewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionWithSpinner = WithSpinner(Collection);


const Shop = ({ match, isCollectionLoaded, isCollectionsFetching, fetchCollectionsStart }) => {

    useEffect(() => {
        fetchCollectionsStart();   
    }, [fetchCollectionsStart]);

    return (
        <div>
            <Suspense fallback={<Spinner />}>
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
            </Suspense>
        </div>
    );
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