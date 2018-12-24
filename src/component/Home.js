import React from 'react';
import BackdropSlider from './BackdropSlider';
import HomeContent from './HomeContent';

const Home = () => (

<div className='content'>

        <BackdropSlider/>
        {/* <div style={{backgroundColor: '#dde', width: '100%', height: '300px'}}>

        </div> */}
        <HomeContent/>
      </div>
  );


export default Home;
