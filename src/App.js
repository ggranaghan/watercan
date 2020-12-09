import './App.css';
import React, { useState, useEffect } from 'react';
require('dotenv').config();


var config = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_DATABASEURL,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDER,
  appId: process.env.REACT_APP_APPID,
  measurementId: process.env.REACT_APP_MEASUREMENTID
};

var data = [];

window.firebase.initializeApp(config);

var database = window.firebase.database();

var ref = database.ref("data");

ref.on("value", gotData, handleError);

function handleError(err) {
    console.log("Error :(")
    console.log(err)
}


 function gotData(ref) {
  var snapshot = ref.val();
  var keys = Object.keys(snapshot);
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var string = snapshot[key]
    console.log(string)
  }   
}

function App() {

function handleClick(e) {
  e.preventDefault();
  data.push(document.getElementById("input").value)
  database.ref('data').push(data);
  document.getElementById("form").reset();
}

  return (
    <div className="App">
      <div className="Container">
        <h1>
           Database Test
        </h1>
        <h3>
          This is a test of the firebase database.
        </h3>
        <p>
          If this works, submiting text in the field below will send data to firestore, and the data will be returned and rendered on this page.
        </p>
        <form id="form">
          <input id="input" placeholder="type here">
          </input>
          <br/>
          <button onClick={handleClick}>
            submit
          </button>
        </form>
     <p>
bummer
      </p>
      </div>
    </div>
  );
}

export default App;
