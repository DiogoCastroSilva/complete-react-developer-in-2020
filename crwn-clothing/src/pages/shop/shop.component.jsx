import React, { Component } from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

// Fake data
import SHOP_DATA from './shop.data';


class Shop extends Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: SHOP_DATA
        };
    }

    render() {
        const { collections } = this.state;
        return (
            <div>
                {collections.map(({ id, ...otherCollectionProps }) => (
                    <CollectionPreview
                        key={id}
                        {...otherCollectionProps}
                    />
                ))}
            </div>
        );
    }
}

export default Shop;