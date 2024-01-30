import React, { Component, useState } from "react";
import NewsContent from "./NewsContent";

function Newsletter() {

  const[Ndata, setData] = useState(NewsContent);

  return (
     <>
      <div className="Newsletter">
        <div className="container">
          {Ndata.map((curElem) => { 
            return(
              <div className="NewsletterInfo" key={curElem.id}>
                <h1>{curElem.title}</h1>
                <p>{curElem.desc}</p>
                <p>{curElem.a1} {curElem.a2}</p>
              </div>
            )
          })}
        </div>
      </div>
    </>
  );

}
export default Newsletter; 