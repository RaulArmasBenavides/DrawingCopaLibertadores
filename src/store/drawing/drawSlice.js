import { createSlice } from '@reduxjs/toolkit';

const initialState = {
       pots :{   pot1: 
      [{ id: '1', name: 'Flamengo', country: 'Brazil', isFase3: false} , 
      { id: '2', name: 'Fluminense', country: 'Brazil', isFase3: false  },
      { id: '3', name: 'Gremio', country: 'Brazil', isFase3: false },
      { id: '4', name: 'LDU', country: 'Equator', isFase3: false  },
      { id: '5', name: 'Palmeiras', country: 'Brazil', isFase3: false },
      { id: '6', name: 'Peñarol', country: 'Uruguay', isFase3: false  },
      { id: '7', name: 'River Plate', country: 'Argentina', isFase3: false  },
      { id: '8', name: 'Sao Paulo', country: 'Brazil', isFase3: false  },
    ],
    pot2: [
      { id: '9', name: 'Atlético Mineiro', country: 'Brazil', isFase3: false },
      { id: '10', name: 'Barcelona SC', country: 'Equator', isFase3: false  },
      { id: '11', name: 'Bolívar', country: 'Bolivia', isFase3: false  },
      { id: '12', name: 'Cerro Porteño', country: 'Paraguay', isFase3: false },
      { id: '13', name: 'Estudiantes de la Plata', country: 'Argentina', isFase3: false  },
      { id: '14', name: 'Independiente del Valle', country: 'Equator', isFase3: false},
      { id: '15', name: 'Junior', country: 'Colombia', isFase3: false  },
      { id: '16', name: 'Libertad', country: 'Brazil', isFase3: false },
    ],
    pot3: [
      { id: '17', name: 'Alianza Lima', country: 'Peru', isFase3: false  },
      { id: '18', name: 'Deportivo Táchira', country: 'Venezuela', isFase3: false  },
      { id: '19', name: 'Millonarios', country: 'Colombia', isFase3: false },
      { id: '20', name: 'Rosario Central', country: 'Argentina', isFase3: false },
      { id: '21', name: 'San Lorenzo', country: 'Argentina', isFase3: false },
      { id: '22', name: 'Talleres', country: 'Argentina', isFase3: false },
      { id: '23', name: 'The Strongest', country: 'Bolivia', isFase3: false  },
      { id: '24', name: 'Universitario', country: 'Peru', isFase3: false  },
    ],
    pot4: [
      { id: '25', name: 'Botafogo', country: 'Brazil', isFase3: true },
      { id: '26', name: 'Caracas', country: 'Venezuela', isFase3: false  },
      { id: '27', name: 'Cobresal', country: 'Chile', isFase3: false  },
      { id: '28', name: 'Colo Colo', country: 'Chile', isFase3: true},
      { id: '29', name: 'Huachipato', country: 'Chile', isFase3: false  },
      { id: '30', name: 'Liverpool', country: 'Uruguay', isFase3: false },
      { id: '31', name: 'Nacional', country: 'Uruguay', isFase3: true  },
      { id: '32', name: 'Palestino', country: 'Chile', isFase3: true  },
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

export const sorteoSlice = createSlice({
  name: 'tournament',
  initialState,
  reducers: {
    iniciarSorteo: (state) => {
      state.sorteoIniciado = true;
    },
    updateGroups: (state, action) => {
      state.groups = action.payload;
    },
    limpiarSorteo:(state,action) =>{
     state.groups = {
      group1: [/* ...teams */],
      group2: [/* ...teams */],
      group3: [/* ...teams */],
      group4: [/* ...teams */],
      group5: [/* ...teams */],
      group6: [/* ...teams */],
      group7: [/* ...teams */],
      group8: [/* ...teams */],
     };
    }
  },
});

// Exporta las acciones
export const { iniciarSorteo, updateGroups,limpiarSorteo } = sorteoSlice.actions;