import './App.css';
import "firebase/auth";
import firebase from "firebase/app";
import React, { useEffect } from 'react';

require("firebase/app")
require("firebase/auth")
require('dotenv').config();


var firebaseui = require('firebaseui');

var uiConfig = {
    signInSuccessUrl: "/",
    signInOptions: [
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
  };

  var ui = new firebaseui.auth.AuthUI(firebase.auth());


function Login() {

    useEffect(() => { 
        ui.start('#firebaseui-auth-container', uiConfig);
        });

  return (
<div>
<h1 style={{textAlign: "center"}}>Sign in or create an account below</h1>
<div id="firebaseui-auth-container"></div>
</div>
  );
}

export default Login;
