import React from 'react';

import { DirectoryContainer } from './directory.styles';

import MenuItem from '../menu-item/menu-item.component';


const Directory = ({ sections }) => (
    <DirectoryContainer>
        {sections.map(({ id, ...otherSectionProps }) => (
            <MenuItem
                key={id}
                {...otherSectionProps}
            />
        ))}
    </DirectoryContainer>
);

export default Directory;