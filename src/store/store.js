import { configureStore } from '@reduxjs/toolkit';
import { sorteoSlice } from './drawing';

export const store = configureStore({
  reducer: {
    draw: sorteoSlice.reducer
  },
});