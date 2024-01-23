import v5 from "./images/office1.jpg";
import v4 from "./images/office2.jpg";

function Tips(){
	return( 

    <div className="App">
      <div className="container">
        <div className="Tips">
        	<div className="tipsleft">
            <span>TRACKUNG POST</span>
        		<h2>Advanced Viewer Tracker for Consistent Posting</h2>
            <p>There are many variations to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator injected humour, or non-characteristic words etc.</p>
            <button type="button">Learn More</button>
      	  </div>
      	  <div className="tipsRight">
            <img src={v5} alt="" />
      	  </div>
        </div>
        <div className="Tips mt-7">
          <div className="tipsRight">
            <img src={v4} alt="" />
          </div> 
          <div className="tipsleft">
            <span>TRACKUNG POST</span>
            <h2>Advanced Viewer Tracker for Consistent Posting</h2>
            <ul>
              <li>perspiciatis unde omnis iste natus error sit voluptatem</li> 
              <li>unde omnis iste natus error sit voluptatem</li>
            </ul>
            <button type="button">Learn More</button>
          </div>
        </div>
      </div>
    </div> 

	);
} 
export default Tips;