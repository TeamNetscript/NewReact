
import app1 from "./images/app1.png";
import app2 from "./images/app2.png";

function Add(){
	return( 

    <div className="container">
      <div className="Add">
        <div className="addLeft">
          <h2>Your wedding in the palm of your hand</h2>
          <p>Our apps make it even easier to plan your wedding. Enquire with suppliers, access planning tools, read verified reviews and more.</p>
          <ul>
            <li><img src={app1} alt="" /></li>
            <li><img src={app2} alt="" /></li>
          </ul>
        </div>
        <div className="addRight">    
        </div>
      </div>
    </div> 
    
	);
} 
export default Add;