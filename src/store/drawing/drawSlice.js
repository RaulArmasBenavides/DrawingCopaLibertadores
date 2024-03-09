import { createSlice } from '@reduxjs/toolkit';

export const sorteoSlice = createSlice({
  name: 'sorteo',
  initialState: {
    equipos: [],
    grupos: {},
    sorteoIniciado: false,
  },
  reducers: {
    iniciarSorteo: (state) => {
      state.sorteoIniciado = true;
    },
    asignarEquipoAGrupo: (state, action) => {
      const { equipoId, grupoId } = action.payload;
      // Añade lógica para asignar el equipo al grupo respectivo
    },
  },
});

// Exporta las acciones
export const { iniciarSorteo, asignarEquipoAGrupo } = sorteoSlice.actions;