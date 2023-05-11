import React from 'react';
import AboutUs from './AboutUs';
import Gallery from './Gallery';
import Homepage from './Homepage';

function Home() {
  return (
    <div className='home'>
      <Homepage />
      <AboutUs />
      <Gallery />
    </div>
  )
}

export default Home
