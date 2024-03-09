import { configureStore } from '@reduxjs/toolkit';
import { drawSlice } from './drawing';

export const store = configureStore({
  reducer: {
    draw: drawSlice.reducer
  },
});