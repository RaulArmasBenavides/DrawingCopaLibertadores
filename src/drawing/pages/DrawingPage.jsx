import React , { useState } from 'react';
import './SorteoSimulator.css'; // Asume que tus estilos están aquí
import {Team} from '../components/Team';
import { Flipper, Flipped } from 'react-flip-toolkit';
import Button from '@mui/material/Button';


export const DrawingPage = ()=> {

  const initialState = {
    pots :{
      pot1: [
        { id: '1', name: 'Flamengo', country: 'Brazil', isFase3: false },
        { id: '2', name: 'Fluminense', country: 'Brazil', isFase3: false },
        { id: '3', name: 'Gremio', country: 'Brazil', isFase3: false },
        { id: '4', name: 'LDU', country: 'Equator', isFase3: false },
        { id: '5', name: 'Palmeiras', country: 'Brazil', isFase3: false },
        { id: '6', name: 'Peñarol', country: 'Uruguay', isFase3: false },
        { id: '7', name: 'River Plate', country: 'Argentina', isFase3: false },
        { id: '8', name: 'Sao Paulo', country: 'Brazil', isFase3: false },
      ],
      pot2: [
        { id: '9', name: 'Atlético Mineiro', country: 'Brazil', isFase3: false },
        { id: '10', name: 'Barcelona SC', country: 'Equator', isFase3: false },
        { id: '11', name: 'Bolívar', country: 'Bolivia', isFase3: false },
        { id: '12', name: 'Cerro Porteño', country: 'Paraguay', isFase3: false },
        { id: '13', name: 'Estudiantes', country: 'Argentina', isFase3: false },
        { id: '14', name: 'Independiente del Valle', country: 'Equator', isFase3: false },
        { id: '15', name: 'Junior', country: 'Colombia', isFase3: false },
        { id: '16', name: 'Libertad', country: 'Brazil', isFase3: false },
      ],
      pot3: [
        { id: '17', name: 'Alianza Lima', country: 'Peru', isFase3: false },
        { id: '18', name: 'Deportivo Táchira', country: 'Venezuela', isFase3: false },
        { id: '19', name: 'Millonarios', country: 'Colombia', isFase3: false },
        { id: '20', name: 'Rosario Central', country: 'Argentina', isFase3: false },
        { id: '21', name: 'San Lorenzo', country: 'Argentina', isFase3: false },
        { id: '22', name: 'Talleres', country: 'Argentina', isFase3: false },
        { id: '23', name: 'The Strongest', country: 'Bolivia', isFase3: false },
        { id: '24', name: 'Universitario', country: 'Peru', isFase3: false },
      ],
      pot4: [
        { id: '25', name: 'Botafogo', country: 'Brazil', isFase3: false },
        { id: '26', name: 'Caracas', country: 'Venezuela', isFase3: false },
        { id: '27', name: 'Cobresal', country: 'Bolivia', isFase3: false },
        { id: '28', name: 'Colo Colo', country: 'Chile', isFase3: false },
        { id: '29', name: 'Huachipato', country: 'Venezuela', isFase3: false },
        { id: '30', name: 'Liverpool', country: 'Uruguay', isFase3: false },
        { id: '31', name: 'Nacional', country: 'Argentina', isFase3: true },
        { id: '32', name: 'Palestino', country: 'Brazil', isFase3: false },
      ],
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


 

  const handleRandomDraw2 = () => {
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
  const handleRandomDraw3 = () => {
    let newPots = { ...teams.pots };
    let newGroups = { ...teams.groups };
  
    // Función auxiliar para encontrar un grupo disponible que no viole las restricciones
    const findAvailableGroup = (team, startingIndex, groups) => {
      for (let i = startingIndex; i < groups.length; i++) {
        const currentGroup = groups[i];
        const hasSameCountryTeam = currentGroup.some(member => member.country === team.country);
        const isExceptionAllowed = team.isFase3 && currentGroup.some(member => member.country === team.country);
  
        if (!hasSameCountryTeam || isExceptionAllowed) {
          return i;
        }
      }
      // Si hemos llegado al final, empezamos de nuevo desde el principio
      for (let i = 0; i < startingIndex; i++) {
        const currentGroup = groups[i];
        const hasSameCountryTeam = currentGroup.some(member => member.country === team.country);
        const isExceptionAllowed = team.isFase3 && currentGroup.some(member => member.country === team.country);
  
        if (!hasSameCountryTeam || isExceptionAllowed) {
          return i;
        }
      }
      throw new Error('No se encontró un grupo disponible que cumpla las restricciones.');
    };
  
    // Bucle para asignar equipos de cada pot a los grupos
    Object.keys(newPots).forEach(potKey => {
      newPots[potKey].forEach(team => {
        let groupIndex = 0;
        try {
          // Encuentra un grupo disponible para el equipo actual
          groupIndex = findAvailableGroup(team, groupIndex, newGroups);
          // Asigna el equipo al grupo encontrado
          newGroups[groupIndex] = [...newGroups[groupIndex], team];
        } catch (error) {
          console.error(error.message);
          // Manejo de errores o lógica adicional aquí si no se encuentra un grupo adecuado
        }
      });
    });
  
    // Actualiza el estado con los nuevos grupos
    setTeams({ ...teams, groups: newGroups });
  };

  const handleRandomDraw = () => {
    let pots = { ...teams.pots };
     let groups = { ...teams.groups };
    // Copia de los grupos para modificar durante el sorteo
    let newGroups = { ...groups };
    
    // Asigna equipos de pot1 a pot4 a cada grupo, uno a uno
    Object.keys(pots).forEach(potKey => {
      let currentGroupIndex = 0;
      
      pots[potKey].forEach(team => {
        // Encuentra el próximo grupo disponible
        let groupKey = Object.keys(newGroups)[currentGroupIndex];
        let group = newGroups[groupKey];
        let tries = 0;
  
        // Revisa las restricciones de país
        while (group.some(member => member.country === team.country) && tries < Object.keys(newGroups).length) {
          currentGroupIndex = (currentGroupIndex + 1) % Object.keys(newGroups).length;
          groupKey = Object.keys(newGroups)[currentGroupIndex];
          group = newGroups[groupKey];
          tries++;
        }
        
        // Si no se encontró un grupo adecuado después de revisar todos, lanzar un error
        if (tries === Object.keys(newGroups).length) {
          throw new Error('No se pudo encontrar un grupo adecuado para el equipo: ' + team.name);
        }
        
        // Agrega el equipo al grupo seleccionado
        newGroups[groupKey].push(team);
        
        // Mueve al siguiente grupo para el próximo equipo
        currentGroupIndex = (currentGroupIndex + 1) % Object.keys(newGroups).length;
      });
    });
  
    return newGroups;
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
 