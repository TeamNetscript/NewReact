import React, { useState } from 'react';
 
import Venue from './Venue.js'; 
import Tips from './Tips.js'; 
import Hero from './Hero.js';
import Tech from './Tech.js';
import Newsletter from './Newsletter.js';

function Home() { 
  return (
    <>
      <Hero/> 
      <Tech/>
      <Tips/>
      <Newsletter/>
      <Venue/>
    </> 
  )
}

export default Home;