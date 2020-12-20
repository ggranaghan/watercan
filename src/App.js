import './App.css';
import firebase from "firebase/app";
import "firebase/app";
import React, { useState, useEffect } from 'react';
require('dotenv').config();
require("firebase/database");
require("firebase/app")
//This is the firebase DB config API key etc, linked to .env file to hide
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

//Initizalizes firebase
firebase.initializeApp(config);

var database = firebase.database();

function App() {
  console.log("hello")
  let keyNum = 0;
  let items;
 


  const [displayData, updateDisplay] = useState(['Data will appear here']);
  const [inputField, updateInputField] = useState('');

  useEffect(() => { 
    var ref = database.ref("data");
    ref.once("value", gotData, handleError);

    function handleError(err) {
        console.log("Error :(")
        console.log(err)
    }
    //Callback of the ref.on() method that does something with the data when it is recieved 
      function gotData(ref) {
      var snapshot = ref.val();
      if (snapshot !== null){
      var keys = Object.keys(snapshot);
      var response = []
      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        response.push(snapshot[key])
      } 
      updateDisplay(response.reverse())  
    }
  }  
  },);

  (function() {
    items = displayData.map(function(item){
     return <div key={keyNum+=1}>
       <li key={keyNum+=1}>{item}</li>
       {/* {clicked !== 0 ? <button key={keyNum+=1}>remove</button> : null} */}
       </div>
    ;
   });
 }
 )()

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
          <input id="input" placeholder="type here" onChange={(e)=> updateInputField(e.target.value)}>
          </input>
          <br/>
          <button onClick={function (e){
            e.preventDefault();
            if (inputField){
            database.ref('data').push(inputField);
            document.getElementById("form").reset();
            updateDisplay([inputField])
            updateInputField('')
        }
        else{
          alert("Please type something before you submit :)")
        }
        }
          }>
            submit
          </button>
        </form>
     <ul>
      {items}
      </ul>
      </div>
    </div>
  );
}
export default App;
