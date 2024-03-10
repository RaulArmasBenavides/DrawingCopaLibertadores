import React , { useState } from 'react';
import './SorteoSimulator.css'; // Asume que tus estilos están aquí
import {Team} from '../components/Team';
import { Flipper, Flipped } from 'react-flip-toolkit';
import Button from '@mui/material/Button';


export const DrawingPage = ()=> {

  const initialState = {
    pots :{
      pot1: [{ id: '1', name: 'Team 1', logo: '/path/to/logo1.png' }],
      pot2: [{ id: '2', name: 'Team 2', logo: '/path/to/logo2.png' }],
      pot3: [{ id: '3', name: 'Team 3', logo: '/path/to/logo3.png' }],
      pot4: [{ id: '4', name: 'Team 4', logo: '/path/to/logo4.png' }],
    },
      groups : {
      group1: [/* ...teams */],
      group2: [/* ...teams */],
      group3: [/* ...teams */],
      group4: [/* ...teams */],
      group5: [/* ...teams */],
      group6: [/* ...teams */],
      group7: [/* ...teams */],
      group8: [/* ...teams */],
    }
  };

  const [teams, setTeams] = useState(initialState);


 

  const handleRandomDraw = () => {
    let newPots = { ...teams.pots };
    let newGroups = { ...teams.groups };
    Object.keys(newPots).forEach(potKey => {
      newPots[potKey].forEach(team => {
        const availableGroups = Object.keys(newGroups);
        const randomGroupKey = availableGroups[Math.floor(Math.random() * availableGroups.length)];
        newGroups[randomGroupKey] = [...newGroups[randomGroupKey], team];
      });
    });

    // Actualizar el estado para reflejar los nuevos grupos y vaciar los pots
    setTeams({ pots: { pot1: [], pot2: [], pot3: [], pot4: [] }, groups: newGroups });
  };
  const handleReset = () => {
    setTeams(initialState);
  };

    // Función para mover equipos de pots a grupos
    const handleMoveTeamToGroup = (teamId, potKey, groupKey) => {
      const team = teams.pots[potKey].find(t => t.id === teamId);
      const newPots = {
        ...teams.pots,
        [potKey]: teams.pots[potKey].filter(t => t.id !== teamId)
      };
      const newGroups = {
        ...teams.groups,
        [groupKey]: [...teams.groups[groupKey], team]
      };
      setTeams({ pots: newPots, groups: newGroups });
    };
 
  return (
    <Flipper flipKey={JSON.stringify(teams)}>
    <div className="sorteo-simulator">
    <header>
        <h1>CONMEBOL Copa Libertadores Draw Simulator</h1>
        <p>Pots updated on January 1, 2024</p>
        <p>2024 Copa Libertadores Group Stage Draw Simulator - Pots</p>
      </header>
      <div className="pots">
        {Object.keys(teams.pots).map(potKey => (
          <div key={potKey} className="pot">
            <h2>{potKey.toUpperCase()}</h2>
            {teams.pots[potKey].map(team => (
              <Flipped key={team.id} flipId={team.id}>
                <div>
                  <Team name={team.name} logo={team.logo} />
                </div>
              </Flipped>
            ))}
          </div>
        ))}
      </div>
      <Button variant="contained" color="primary" onClick={handleRandomDraw}>
          Sortear Grupos
        </Button>
        <Button variant="outlined" color="secondary" onClick={handleReset}>
    Limpiar
  </Button>
      <div className="groups">
        {Object.keys(teams.groups).map(groupKey => (
          <div key={groupKey} className="group">
            <h2>{groupKey.toUpperCase()}</h2>
            {teams.groups[groupKey].map(team => (
              <Flipped key={team.id} flipId={team.id}>
                <div>
                  <Team name={team.name} logo={team.logo} />
                </div>
              </Flipped>
            ))}
          </div>
        ))}
      </div>
    </div>
  </Flipper>
  );
};
 