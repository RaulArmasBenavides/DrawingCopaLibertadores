import React from 'react';
import './Team.css'; // Estilos para el equipo

export const Team = ({ name, logo }) => (
  <div className="team">
    <img src={logo} alt={`${name} logo`} className="team-logo" />
    <span className="team-name">{name}</span>
  </div>
);
 