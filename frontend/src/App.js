import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import ExternalLoginForm from './ExternalLoginForm';
import PantallaInicio from './PantallaInicio';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleLoginSuccess() {
    setIsLoggedIn(true);
  }

  return (
    <Router>
      <Switch>
        <Route path="/login">
          {isLoggedIn ? <Redirect to="/inicio" /> : <ExternalLoginForm onLoginSuccess={handleLoginSuccess} />}
        </Route>
        <Route path="/inicio">
          {isLoggedIn ? <PantallaInicio /> : <Redirect to="/login" />}
        </Route>
        <Redirect from="/" to="/login" />
      </Switch>
    </Router>
  );
}

export default App;
