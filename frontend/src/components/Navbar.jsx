import { Link } from "react-router-dom";
import React from 'react';
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav>
        <div className="navbar">
            <Link className="link" to="/home">Home</Link>
            <Link className="link" to="/home/about">About</Link>
            <Link className="link" to="/home/form">Form</Link>
            <Link className="link" to="/home/help">Help</Link>
            <Link className="link" to="/home/Query">Query</Link>

        </div>
    </nav>
  );
}

export default Navbar;
