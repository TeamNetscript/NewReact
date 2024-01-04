import React from "react";
import Slider from "react-slick";
import { useState } from "react";
import app1 from "./images/office1.jpg"; 

const settings = {
  dots: false,
  infinite: true,
  speed: 500, 
  centerMode: false,
  slidesToShow: 4,
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
            <Slider className="cat" >
              {mData.map((curElem) => { 
                return(
                  <>
                    <div className="cat-item"  {...settings}  key={curElem.id}>
                      <div className="cat-item_div">
                        <img src={curElem.image} alt="" />
                        <h3>{curElem.name}</h3>
                      </div>
                      <p>{curElem.des}</p>
                    </div> 
                  </>
                )
              })} 
            </Slider> 
          </div>
        </div>
      </div> 
    </>
  );
}

export default DataCard;