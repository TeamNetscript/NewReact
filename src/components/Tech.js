 
import v5 from "./images/office1.jpg";
import app2 from "./images/app2.png";
import Form from './Form.js';
import Navbar from './Navbar.js';
import Footer from './Footer.js';
import React, { Component } from 'react';

function Tech(){
	return( 
    <>
      <div className="techSec">
        <div className="container">
          <div className="techInfo">
            <div className="tectTitle">
              <span>Why NetScript</span>
              <h3>We Work on IT Technologies</h3>
              <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
            </div>
            <div className="techServices">
              <div className="techSinfo active">
                <span><i className="fa fa-code fa-2x"></i></span>
                <h5>Web Development</h5>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised.</p>
              </div>
              <div className="techSinfo">
                <span><i className="fa fa-code fa-2x"></i></span>
                <h5>Frontend Development</h5>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised.</p>
              </div>
              <div className="techSinfo">
                <span><i className="fa fa-tv fa-2x"></i></span>
                <h5>UI/UX</h5>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
	);
} 
export default Tech;