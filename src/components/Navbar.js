
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
     <>
      <header>
        <div className="container">
          <navbar>
            <NavLink to="/" className="Logo">Company</NavLink>
            <ul>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/jobs">Career</NavLink>
              <NavLink to="/form">Form</NavLink>
              <NavLink to="/sliders">Slider</NavLink>
            </ul>
            <div className="admin">
              <NavLink to="/form"><i className="fa fa-arrow-right"></i> Contact Us</NavLink>
            </div>
          </navbar> 
        </div>
      </header>  
    </>
  );

}
export default Navbar; 