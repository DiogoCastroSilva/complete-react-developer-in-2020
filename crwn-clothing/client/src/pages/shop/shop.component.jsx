import React, { useEffect, Suspense, lazy } from 'react';
import { Route } from 'react-router-dom';

import Spinner from '../../components/spinner/spinner.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionsOverviewContainer = lazy(() => import('../../containers/collections-overview.container'));
const Collection = lazy(() => import('../../containers/collection.container'));
const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverviewContainer);
const CollectionWithSpinner = WithSpinner(Collection);


const Shop = ({
    match,
    isCollectionLoaded,
    isCollectionsFetching,
    fetchCollectionsStart
}) => {

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
                        <CollectionOverviewWithSpinner
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

export default Shop;