import './App.css';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import "firebase/auth";
import firebase from "firebase/app";
import { AuthContext } from './AuthContext';
require('dotenv').config();



function Nav() {


  const { authStateContext, setAuthStateContext } = useContext(AuthContext);


  firebase.auth().onAuthStateChanged(firebaseUser => {

    if (firebaseUser) {
      setAuthStateContext(true)
    }
    else {
      setAuthStateContext(false)
    }
  });

  const linkStyle = {
    color: 'black',
    textDecoration: 'none',
    hover: 'white'
  };

  function logOut() {
    firebase.auth().signOut();
  };

  return (
    <nav className="nav">
      <h2>Firebase App</h2>
      <ul className="links">
        {authStateContext
          ?
          <Link style={linkStyle} to="/login">
            <li onClick={logOut}>
            🚪 Logout
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
