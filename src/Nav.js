import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
require('dotenv').config();


function Nav() {

    const linkStyle = {
        color: 'black',
        textDecoration: 'none',
        hover: 'white'
    };

  return (
    <nav className="nav">
      <h2>Nav Bar</h2>
      <ul className="links">
          <Link style={linkStyle} to="/login">
          <li>
              Login
          </li>
          </Link>
          <Link style={linkStyle} to="/">
          <li>
            App
        </li>
        </Link>
        <li>
            Logout
        </li>
      </ul>
    </nav>
  );
}
export default Nav;
