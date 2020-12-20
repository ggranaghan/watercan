import React, { useState } from 'react';
import './index.css';
import App from './App';
import Login from './Login';
import Nav from './Nav';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { AuthContext } from './AuthContext';


function AppRouter() {

  const [authStateContext, setAuthStateContext] = useState(null);

  function PrivateRoute({ children, ...rest }) {
    return (
      <Route
        {...rest}
        render= {({ location }) =>
         authStateContext ? (
            children
          ) 
          : null
        //   (
        //     <Redirect
        //       to={{
        //         pathname: "/login",
        //         state: { from: location }
        //       }}
        //     />
        //   )
        }
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
    <PrivateRoute path="/" exact>
        <App />
    </PrivateRoute>
    </AuthContext.Provider>
    </div>
    </Router>

)
}

export default AppRouter