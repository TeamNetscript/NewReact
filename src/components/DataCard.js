import React, { Component } from "react";
import Slider from "react-slick";
import { useState } from "react";
import app1 from "./images/office1.jpg"; 

const settings = {
  dots: false,
  infinite: true,
  speed: 500, 
  centerMode: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1, 
      }
    } 
  ]
}

function DataCard({mData}){
  return(
    <>
      <div className="container">
        <div className="slider1">
          <div className="sliderRight">
            {mData.map((curElem) => {
              return(
                <> 
                  <Slider className="cat" {...settings} key={curElem.id}>
                    <div className="cat-item">
                      <div className="cat-item_div">
                        <img src={app1} alt="" />
                        <h3> </h3>
                      </div>
                      <p>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.</p>
                    </div>  
                  </Slider> 
                </>
                )
            })}
        </div>
        </div>
      </div> 
    </>
  );
}

export default DataCard;