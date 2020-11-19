import React, { useContext } from 'react';

import './collections-overview.styles.scss';

import CollectionPreview from '../collection-preview/collection-preview.component';
import CollectionContext from '../../context/collection/collection.context';


const CollectionsOverview = () => {
  const collections = useContext(CollectionContext);
  
  return (
    <div className='collections-overview'>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};


export default CollectionsOverview;
