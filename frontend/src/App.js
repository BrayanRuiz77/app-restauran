import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import ExternalLoginForm from './ExternalLoginForm';
import PantallaInicio from './PantallaInicio';
import './App.css'; 

function App() {
  const [user, setUser] = useState(null);

  const handleLoginSuccess = (userData) => {
    setUser(userData);
  };

  return (
    <Router>
      
      <Routes>
        <Route path="/login" element={<ExternalLoginForm onLoginSuccess={handleLoginSuccess} />} />
        <Route 
          path="/pantalla-inicio" 
          element={user ? <PantallaInicio nombre={user.nombre} apellido={user.apellido} /> : <Navigate to="/login" />} 
        />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
