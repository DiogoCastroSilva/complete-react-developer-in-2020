import React from 'react';
import { withRouter } from 'react-router-dom';

import CollectionItemContainer from '../../containers/collection-item.container';

import {
    CollectionPreviewContainer,
    TitleContainer,
    PreviewContainer
} from './collection-preview.styles';


export const CollectionPreview = ({
    title,
    items,
    history,
    match,
    routeName
}) => (
    <CollectionPreviewContainer>
        <TitleContainer
            onClick={() =>
                history.push(`${match.path}/${routeName}`)
            }
        >
            {title.toUpperCase()}
        </TitleContainer>
        <PreviewContainer>
            {items
                .filter((item, index) => index < 4)
                .map(item => (
                    <CollectionItemContainer
                        key={item.id}
                        item={item}
                    />
                ))
            }
        </PreviewContainer>
    </CollectionPreviewContainer>
);

export default withRouter(CollectionPreview);