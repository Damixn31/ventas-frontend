import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getVentas } from '../api/api';

// 👉 Thunk para traer los registros desde el backend
export const fetchVentas = createAsyncThunk(
  'ventas/fetchVentas',
  async () => {
    const res = await getVentas();
    return res.data;
  }
);

const ventasSlice = createSlice({
  name: 'ventas',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchVentas.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchVentas.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchVentas.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default ventasSlice.reducer;

