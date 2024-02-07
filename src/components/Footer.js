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
								<h3>Company</h3>
								<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</p>
								<div className="fSpace"></div>
								<a href="#" className="fbook"><i className="fa fa-phone"></i> (123) 123 1234</a>
							</div>
						</div> 
						<div className="footerInfoData1">
							<div className="fMail">
								<h3>Address</h3> 
								<p>1123 ST, USA CA</p>
								<div className="fSpace"></div>
								<a href="#" className="fbook"><i className="fa fa-book"></i>  Book a free consultation</a>
							</div>
						</div>
						<div className="footerInfoData1">
							<div className="fMail">
								<h3>Email</h3> 
								<a href="mailto:contact@salesboost.com">contact@salesboost.com</a>
								<div className="fSpace"></div>
								<a href="#" className="fbook">Carrer</a>
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