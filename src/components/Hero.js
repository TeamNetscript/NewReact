import React, { Component } from "react"; 
import { NavLink } from 'react-router-dom';

function Hero() {
  return (
     <>
      <div className="main_hero">
        <div className="container">
          <div className="hero">
            <div className="heroLeft">
              <h6>Why Us Bonorum et Malorum</h6>
              <h2>
                <div>
                  <span> Company </span> 
                  <hr/>
                </div>
                <b> to boost your de Finibus Bonorum et Malorum</b>
              </h2>
              <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
              <p><NavLink to="/form"><i className="fa fa-envelope"></i>&nbsp; Get a Quote</NavLink></p>
            </div>
            <div className="heroRight"></div>
          </div>
        </div>
        <div className="companyList">
          <div className="container">
            <ul>
              <li>
                <img src="images/upwork.png" alt=""/>
              </li>
              <li>
                <img src="images/freelancer.png" alt=""/>
              </li>
              <li>
                <img src="images/google.png" alt=""/>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  ); 
}
 
export default Hero;