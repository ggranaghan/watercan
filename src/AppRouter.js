import React, { useState } from 'react';
import './index.css';
import App from './App';
import Login from './Login';
import Nav from './Nav';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { AuthContext } from './AuthContext';


function AppRouter() {

  const [authStateContext, setAuthStateContext] = useState(true);

  function PrivateRoute({
    children,
    ...rest
  }) {
    console.log(authStateContext)
    return (
      <Route
        {...rest}
        render= {props => {
        if (authStateContext) {
          console.log(authStateContext)
            return (children)
        } else {
          console.log(authStateContext)
          return (
          <Redirect
              to={{
                pathname: "/login",
                state: { from: props.location }
              }}
            />
          )
        }      
      }}
      />
    );
  }    

return (

    <Router>
    <div>
    <AuthContext.Provider value={{authStateContext, setAuthStateContext}}>
    <Nav />
    <Route path="/login">
        <Login />
    </Route>
    <PrivateRoute exact path="/">
        <App />
    </PrivateRoute>
    </AuthContext.Provider>
    </div>
    </Router>

)
}

export default AppRouter