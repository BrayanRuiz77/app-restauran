import React from 'react';
import { Link } from 'react-router-dom';

function Inicio() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/menu">Menú</Link></li>
        <li><Link to="/reserva">Reserva de Mesa</Link></li>
        <li><Link to="/horarios">Horarios y Ubicacion</Link></li>
        
      </ul>
    </nav>
  );
}

export default Inicio;