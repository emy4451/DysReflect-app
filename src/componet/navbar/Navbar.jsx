import './Nav.css';
import { Container } from "reactstrap";
import { Link, useNavigate } from 'react-router-dom';
import logo from "../../Images/logo1.png";
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';

export const Navbar = () => {
  const loggedIn = localStorage.getItem("loggedIn") === "true";

  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    signOut(auth);
    navigate("/");
  };

  return (
    <div className="navbar-container">
      <nav className="navbar">
        <Link to="/" className="logo">
          <img src={logo} alt="Logo" className="logo-img" />
        </Link>

        <div className="nav-buttons">
          <div className="nav__right">
            <p className="mb-0 d-flex align-items-center gap-2">
              <i className="ri-phone-line"></i> +216 54 035 174
            </p>
          </div>
          {loggedIn ? (
            <>
              <button onClick={logout} className="nav-button register-button">Logout</button>
              <Link to="/home">
                <button className="nav-button login-button">Home</button>
              </Link>
            </>
          ) : (
            <>
              <Link to="signUp">
                <button className="nav-button register-button">Register</button>
              </Link>
              <Link to="signIn">
                <button className="nav-button login-button">Login</button>
              </Link>
            </>
          )}
        </div>
      </nav>
    </div>
  );
};