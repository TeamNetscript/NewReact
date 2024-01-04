import React, { Component } from "react"; 

function Hero() {
  return (
     <>
      <div className="main_hero">
        <div className="container">
          <div className="hero">
            <div className="heroLeft">
              <h1><b>NetScript to boost your Business</b></h1>
              <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
              <p><a href="#"><i className="fa fa-envelope"></i>&nbsp; Get a Quote</a> <a href="#" className="outline-a"><i className="fa fa-phone"></i>&nbsp; Schedule a Call</a></p>
            </div>
            <div className="heroRight">
              <img src="images/n.png" />
            </div>
          </div>
        </div>
      </div>
    </>
  );

}
export default Hero; 