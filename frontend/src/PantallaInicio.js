import React from 'react';
import './PantallaInicio.css';

function PantallaInicio() {
  const handleNavLinkClick = (event) => {
    event.preventDefault();
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach((link) => link.classList.remove('active'));
    event.currentTarget.classList.add('active');
  };

  return (
    <div>
      <header>
        <nav>
          <ul>
            <li><a href="#" className="active" onClick={handleNavLinkClick}>Inicio</a></li>
            <li><a href="#" onClick={handleNavLinkClick}>Menú</a></li>
            <li><a href="#" onClick={handleNavLinkClick}>Reserva una mesa</a></li>
            <li><a href="#" onClick={handleNavLinkClick}>Acerca de</a></li>
            <li><a href="#" onClick={handleNavLinkClick}>Horario y ubicaciones</a></li>
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
