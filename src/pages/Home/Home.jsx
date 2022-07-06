import React from 'react';

import Main from '../../components/Main/Main';
import Intro from '../../components/Intro/Intro';
import Technology from '../../components/Technology/Technology';
import Market from '../../components/Market/Market';
import Subscribe from '../../components/Subscribe/Subscribe';

const Home = () => {
  return (
    <Main>
      <Intro />
      <Technology />
      <Market />
      <Subscribe />
    </Main>
  )
}

export default Home;
