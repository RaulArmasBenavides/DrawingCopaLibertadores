import React  from 'react';
import { useDispatch,useSelector } from 'react-redux';
import './SorteoSimulator.css'; // Asume que tus estilos están aquí
import {Team} from '../components/Team';
import { Flipper, Flipped } from 'react-flip-toolkit';
import Button from '@mui/material/Button';
import { handleRandomDrawService, limpiarSorteo } from '../../store/drawing';


export const DrawingPage = ()=> {
 
  const dispatch = useDispatch();
  const teams = useSelector(state => state.draw);  

  const handleRandomDraw = () => { 
    dispatch( handleRandomDrawService());
};
  const handleReset = () => {
    dispatch(limpiarSorteo())
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
 