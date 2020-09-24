import React from 'react';

import './collection-preview.styles.scss';


const CollectionPreview = ({ title, items }) => (
    <div>
        <h1 className='collection-preview'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {items
                .filter((_, index) => index < 4)
                .map(item => (
                    <div key={item.id}>{item.name}</div>
                ))
            }
        </div>
    </div>
);

export default CollectionPreview;