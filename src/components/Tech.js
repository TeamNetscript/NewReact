     
import React from 'react';
import { useState } from 'react';
import ServicesData from "./services/ServicesData.js";
import Services from "./services/Services.js"

function Tech(){
  const[ServicesDataInit, setData] = useState(ServicesData);

	return( 
    <>
      <div className="techSec">
        <div className="container">
          <div className="techInfo">
            <div className="tectTitle">
              <span>Why Us</span>
              <h3>We Work on IT Technologies</h3>
              <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
            </div>
            <Services ServicesDataInit={ServicesDataInit}/>
          </div>
        </div>
      </div>
    </>
	);
} 
export default Tech;