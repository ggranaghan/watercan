import './App.css';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import "firebase/auth";
import firebase from "firebase/app";
import { AuthContext } from './AuthContext';
require('dotenv').config();



function Nav() {

  
    const {authStateContext, setAuthStateContext} = useContext(AuthContext);
   

    firebase.auth().onAuthStateChanged(firebaseUser => {
      if(firebaseUser){
          console.log("in")
          setAuthStateContext(true)
      }
      else{
        console.log("out")
        setAuthStateContext(false)
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
          { authStateContext
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
