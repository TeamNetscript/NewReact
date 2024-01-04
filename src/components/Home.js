import React, { useState } from 'react';
 
import Venue from './Venue.js';
import Sliders from './Sliders.js'; 
import Tips from './Tips.js';
import Add from './Add.js';
import BannerSlide from './BannerSlide.js';
import Footer from './Footer.js';
import Navbar from './Navbar.js';
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
      <Sliders/>
    </> 
  )
}

export default Home;