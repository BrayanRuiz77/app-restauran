import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import ExternalLoginForm from './ExternalLoginForm';
import PantallaInicio from './PantallaInicio';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({ nombre: '', apellido: '' });

  function handleLoginSuccess(userData) {
    setIsLoggedIn(true);
    setUser(userData);
  }

  return (
    <Router>
      <Routes>
        <Route path="/login" element={isLoggedIn ? <Navigate to="/inicio" /> : <ExternalLoginForm onLoginSuccess={handleLoginSuccess} />} />
        <Route path="/inicio" element={isLoggedIn ? <PantallaInicio nombre={user.nombre} apellido={user.apellido} /> : <Navigate to="/login" />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
