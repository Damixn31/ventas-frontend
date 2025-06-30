import { configureStore } from '@reduxjs/toolkit';
import productosReducer from './features/productosSlice';
import VentasReducer from './features/ventasSlice';


export const store = configureStore({
  reducer: {
    productos: productosReducer,
    ventas: VentasReducer,
  },
});
