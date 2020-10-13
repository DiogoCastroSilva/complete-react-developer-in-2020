import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import Collection from '../collection/collection.component';

import { convertCollectionSnapshotToMap, firestore } from '../../firebase/firebase.utils';
import { updateCollections } from '../../redux/shop/shop.actions';

import WithSpinner from '../../components/with-spinner/with-spinner.component';


const CollectionOverViewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionWithSpinner = WithSpinner(Collection);

class Shop extends Component {
    state = {
        isLoading: true
    };

    componentDidMount() {
        const { updateCollections } = this.props;
        const collectionRef = firestore.collection('collections');

        collectionRef.get().then(snapshot => {
            const collectionMap = convertCollectionSnapshotToMap(snapshot);
            updateCollections(collectionMap);
            this.setState({ isLoading: false });
        });
    }

    render() {
        const { match } = this.props;
        const { isLoading } = this.state;
        return (
            <div>
                <Route
                    exact
                    path={`${match.path}`}
                    render={(props) =>
                        <CollectionOverViewWithSpinner
                            isLoading={isLoading}
                            {...props}
                        />
                    }
                />
                <Route
                    path={`${match.path}/:collectionId`}
                    render={(props) =>
                        <CollectionWithSpinner
                            isLoading={isLoading}
                            {...props}
                        />
                    }
                />
            </div>
        );
    }
};

const mapDispatchToProps = dispatch => {
    return {
        updateCollections: collectionsMap =>
            dispatch(updateCollections(collectionsMap))
    };
};

export default connect(null, mapDispatchToProps)(Shop);