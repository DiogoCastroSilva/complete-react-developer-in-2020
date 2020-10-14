import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import Collection from '../collection/collection.component';

import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';

import WithSpinner from '../../components/with-spinner/with-spinner.component';
import { createStructuredSelector } from 'reselect';
import { selectIsCollectionLoaded, selectorCollectionFetching } from '../../redux/shop/shop.selector';


const CollectionOverViewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionWithSpinner = WithSpinner(Collection);

class Shop extends Component {

    componentDidMount() {
        const { fetchCollectionsStartAsync } = this.props;
        fetchCollectionsStartAsync();       
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
                            isLoading={!isCollectionLoaded}
                            {...props}
                        />
                    }
                />
                <Route
                    path={`${match.path}/:collectionId`}
                    render={(props) =>
                        <CollectionWithSpinner
                            isLoading={isCollectionsFetching}
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
        fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Shop);