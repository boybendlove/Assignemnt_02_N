import "./navbar.css"
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ loggedIn, onLogout }) => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span ><Link to="/" className="logo">Booking Website</Link></span>
        
        <div className="navItems">
        {loggedIn ? (
          <>
           <Link to="/profile">Profile</Link>
           <button onClick={onLogout}>Logout</button>
          </>
        ) : (
          <>
            <button><Link to="/login">Login</Link></button>
            <button><Link to="/register">Register</Link></button>
          </>
        )}
        </div>
      </div>
    </div>
  )
}

export default Navbar
