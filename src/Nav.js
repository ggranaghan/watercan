import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "firebase/auth";
import firebase from "firebase/app";
require('dotenv').config();

function Nav() {

    const [authState, updateAuthState] = useState(false);

    firebase.auth().onAuthStateChanged(firebaseUser => {
      if(firebaseUser){
          updateAuthState(true)
          console.log("in")
      }
      else{
        updateAuthState(false)
        console.log("out")
      }
      });

    const linkStyle = {
        color: 'black',
        textDecoration: 'none',
        hover: 'white'
    };

    function logOut () {
        firebase.auth().signOut();
    };

  return (
    <nav className="nav">
      <h2>Nav Bar</h2>
      <ul className="links">
          { authState
          ?
          <Link style={linkStyle} to="/login">
        <li onClick={logOut}>
            Logout
        </li>
        </Link>
        :
        null
        }
      </ul>
    </nav>
  );
}
export default Nav;
