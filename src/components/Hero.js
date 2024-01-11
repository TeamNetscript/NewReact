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
              <div>
                <div>
                  <span> Company </span> 
                  <hr/>
                </div>
                <b> to boost your de Finibus Bonorum et Malorum</b>
              </div>
              <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
              <p><NavLink to="/form"><i className="fa fa-envelope"></i>&nbsp; Get a Quote</NavLink></p>
            </div>
            <div className="heroRight">
              <img src="images/new1.jpg" />
            </div>
          </div>
        </div>
      </div>
    </>
  );

}
export default Hero; 