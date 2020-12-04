import React from 'react';

import { HomePageContainer } from './home.styles';

import DirectoryContainer from '../../containers/directory.container';


const Home = () => (
    <HomePageContainer>
        <DirectoryContainer />
    </HomePageContainer>
);

export default Home;