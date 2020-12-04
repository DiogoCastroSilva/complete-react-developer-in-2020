import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Directory from '../components/directory/directory.component';

import { selectDirectorySections } from '../redux/directory/directory.selectors';


const DirectoryContainer = ({ sections }) => (
    <Directory sections={sections} />
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(DirectoryContainer);