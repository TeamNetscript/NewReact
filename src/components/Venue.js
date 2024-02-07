import v5 from "./images/chart.jpg";
import app2 from "./images/app2.png";
import Form from './form/Form.js';
import Navbar from './Navbar.js';
import Footer from './Footer.js';
import React, { Component } from 'react';

function Venue(){
	return( 
    <>
      <div className="Venue_Sec">
        <div className="container">
          <div className="venueTitle">
            <div>
              <h2>What We Do Best</h2>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</p>
            </div>
            <div className="form">
             
            </div>
          </div>
          <div className="Venue"> 
            <div className="venueInfo venueInfoActive">   
              <img src={v5} alt=" "/>
              <div className="venueInfoDiv">
                <span>Development</span>
                <h2>Web Design & Development</h2>
                <a href="#"><i className="fa fa-arrow-right"></i> Read more</a>
              </div>
            </div>
            <div className="venueInfo">   
              <img src={v5} alt=" "/>
              <div className="venueInfoDiv">
                <span>Development</span>
                <h2>Customized/Software Development</h2>
                <a href="#"><i className="fa fa-arrow-right"></i> Read more</a>
              </div>
            </div>
            <div className="venueInfo">   
              <img src={v5} alt=" "/>
              <div className="venueInfoDiv">
                <span>Development</span>
                <h2>Mobile App Development</h2>
                <a href="#"><i className="fa fa-arrow-right"></i> Read more</a>
              </div>
            </div> 
          </div>
        </div>
      </div>
    </>
	);
} 
export default Venue;