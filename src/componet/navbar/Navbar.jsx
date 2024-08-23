import './Nav.css';
import { Container } from "reactstrap";
import { Link, BrowserRouter as Router } from 'react-router-dom';
import logo from "../../Images/logo.png";


export const Navbar = () => {
  
  return (
    
    <div className="container">
      <nav className="navbar">
      <Link to="/" className="logo">
        <img src={logo} alt="Logo" className="logo-img" />
      </Link>
        <ul className="nav-links">
          <li><Link to="home" className="nav-item">HOME</Link></li>
        </ul>
        <div className="nav-buttons">
        <div className="nav__right">
              <p className="mb-0 d-flex align-items-center gap-2">
              <i class="ri-phone-line"></i> +216 54 035 174
              </p>
            </div>
        <Link to="signUp">
          <button className="nav-button register-button">Registre</button></Link>
          <Link to="signIn"><button className="nav-button login-button">Login</button></Link>
        </div>
      </nav></div>
  );
};
