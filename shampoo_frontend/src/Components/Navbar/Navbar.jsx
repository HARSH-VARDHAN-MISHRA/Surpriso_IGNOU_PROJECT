import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import add from '../../Images/user.png';
import cart from '../../Images/online-shopping.png';

const Navbar = () => {
  const [login, setLogin] = useState(false);
  useEffect(() => {
    setLogin(sessionStorage.getItem("login") === "true");
  }, []);

  return (
    <>
      {/* <!-- Navbar Start --> */}
      <div className="container-fluid sticky-top">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light p-0">
            <Link to="/" className="navbar-brand">
              <h2 className="text-dark">Surpriso</h2>
            </Link>
            <button
              type="button"
              className="navbar-toggler ms-auto me-0"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="navbar-nav ms-auto">
                <Link to="/" className="nav-item nav-link active text-dark">Home</Link>
                <Link to="/product" className="nav-item nav-link">Products</Link>
                <Link to="/feature" className="nav-item nav-link">Features</Link>
                
                <Link to="/contact" className="nav-item nav-link">Contact</Link>
                {login ? (
                  <Link to="/cart">
                    <img src={cart} alt="Cart" style={{ height: 30 }} />
                  </Link>
                ) : null}
                &nbsp;&nbsp;&nbsp;
                {login ? (
                  <Link to="/profile">
                    <img src={add} alt="Profile" style={{ height: 30 }} />
                  </Link>
                ) : (
                  <Link to="/signup">
                    <img src={add} alt="Sign Up" style={{ height: 30 }} />
                  </Link>
                )}
              </div>
            </div>
          </nav>
        </div>
      </div>
      {/* <!-- Navbar End --> */}
    </>
  );
};

export default Navbar;
