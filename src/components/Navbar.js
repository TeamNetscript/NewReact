
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
     <>
      <header>
        <div class="container">
          <navbar>
            <a href="#" className="Logo"><img src="images/logo.png"/></a>
            <ul>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/tips">Tips</NavLink>
              <NavLink to="/form">Form</NavLink>
              <NavLink to="/sliders">Slider</NavLink>
            </ul>
            <div className="admin">
              <a href="#"><i className="fa fa-arrow-right"></i> Contact Us</a>
            </div>
          </navbar> 
        </div>
      </header>  
    </>
  );

}
export default Navbar; 