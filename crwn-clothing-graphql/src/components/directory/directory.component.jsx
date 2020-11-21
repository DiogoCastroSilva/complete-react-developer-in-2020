import React from 'react';

import './directory.styles.scss';

import MenuItem from '../menu-item/menu-item.component';
import DIRECTORY_DATA from './directory.data.js';


const Directory = ({ sections = DIRECTORY_DATA }) => (
  <div className='directory-menu'>
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </div>
);

export default Directory;
