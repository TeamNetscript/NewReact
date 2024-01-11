import ficon from "./images/ficon.svg";
import app1 from "./images/app1.png";
import app2 from "./images/app2.png";
import { NavLink } from 'react-router-dom';

function Footer(){
	return(

		<div className="Footer">
			<div className="container">
				<div className="footerMain"> 
					<div className="footerTitle">
						<h3>Contact us in any convenient way</h3>
					</div>
					<div className="footerInfo">
						<div className="footerInfoData1">
							<div className="fMail">
								<h3>Start a project</h3> 
								<a href="mailto:contact@salesboost.com"> contact@salesboost.com</a>
								<div className="fSpace"></div>
								<a href="#" className="fbook"> Book a free consultation</a>
							</div>
						</div>
					</div> 
				</div>
				<div className="copyRights">
					<p>&copy; Comapny - All Right Reserved</p>
				</div>
			</div>
		</div>

	);
}
export default Footer;