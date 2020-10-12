import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import Collection from '../collection/collection.component';

import { convertCollectionSnapshotToMap, firestore } from '../../firebase/firebase.utils';
import { updateCollections } from '../../redux/shop/shop.actions';


class Shop extends Component {
    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const { updateCollections } = this.props;
        const collectionRef = firestore.collection('collections');

        this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
            const collectionMap = convertCollectionSnapshotToMap(snapshot);
            updateCollections(collectionMap);
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromSnapshot.unsubscribe();
    }

    render() {
        const { match } = this.props;
        return (
        <div>
            <Route
                exact
                path={`${match.path}`}
                component={CollectionsOverview}
            />
            <Route
                path={`${match.path}/:collectionId`}
                component={Collection}
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