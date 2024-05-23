import React from 'react';
import './UserLogo.css';
import UserLogo from './UserLogo';

function PantallaInicio({ nombre, apellido }) {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li><a href="#" className="active">Inicio</a></li>
            <li><a href="#">Menú</a></li>
            <li><a href="#">Reserva una mesa</a></li>
            <li><a href="#">Acerca de</a></li>
            <li><a href="#">Horario y ubicaciones</a></li>
            <li style={{ float: 'right' }}>
              <UserLogo nombre={nombre} apellido={apellido} />
            </li>
          </ul>
        </nav>
      </header>

      <section className="main-content">
        <div className="hero">
          <h1>RESTAURANT JAM DELIGHTS</h1>
        </div>
      </section>

      <footer>
        {/* Información de contacto, derechos de autor, enlaces a redes sociales, etc. */}
      </footer>
    </div>
  );
}

export default PantallaInicio;
