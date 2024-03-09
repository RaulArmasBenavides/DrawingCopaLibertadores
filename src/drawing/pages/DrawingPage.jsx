import React from 'react';
import './SorteoSimulator.css'; // Asume que tus estilos están aquí

export const DrawingPage = ()=> {
  // Asumiendo que tienes tu data en algún lugar para los pots y los grupos
  const pots = {
    pot1: [/* ...teams */],
    pot2: [/* ...teams */],
    pot3: [/* ...teams */],
    pot4: [/* ...teams */],
  };

  const groups = {
    group1: [/* ...teams */],
    group2: [/* ...teams */],
    // ... otros grupos
  };

  return (
    <div className="sorteo-simulator">
      <header>
        <h1>CONMEBOL Copa Libertadores Draw Simulator</h1>
        <p>Pots updated on January 1, 2024</p>
        <p>2024 Copa Libertadores Group Stage Draw Simulator - Pots</p>
      </header>
      <div className="pots">
        {Object.keys(pots).map((potKey) => (
          <div key={potKey} className="pot">
            <h2>{potKey.toUpperCase()}</h2>
            {/* Renderiza los equipos de cada pot aquí */}
            {pots[potKey].map((team) => (
              <div key={team.id} className="team">
                {team.name}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="groups">
        {Object.keys(groups).map((groupKey) => (
          <div key={groupKey} className="group">
            <h2>{groupKey.toUpperCase()}</h2>
            {/* Renderiza los equipos de cada grupo aquí */}
            {groups[groupKey].map((team) => (
              <div key={team.id} className="team">
                {team.name}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
 