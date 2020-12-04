import React from 'react';

import { HomePageContainer } from './home.styles';

import DirectoryContainer from '../../container/directory.container';


const Home = () => (
    <HomePageContainer>
        <DirectoryContainer />
    </HomePageContainer>
);

export default Home;