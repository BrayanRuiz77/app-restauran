import React from 'react';
import './UserLogo.css';

function UserLogo({ nombre, apellido }) {
  const getInitials = () => {
    if (!nombre || !apellido) return '';
    return `${nombre.charAt(0)}${apellido.charAt(0)}`;
  };

  return (
    <div className="user-logo">
      <div className="initials">{getInitials()}</div>
    </div>
  );
}

export default UserLogo;
