import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './Login';
import Nav from './Nav';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import "firebase/database";
import "firebase/app";

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <div>
    <Nav />
    <Route path="/login" component={Login}/>
    <Route  path="/" exact component={App}/>
    </div>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
