import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchProductos = createAsyncThunk(
  'productos/fetchProductos',
  async () => {
    const res = await fetch('http://localhost:4000/api/productos');
    if (!res.ok) throw new Error('Error al cargar los productos');
    return await res.json();
  }
);

const productosSlice = createSlice({
  name: 'productos',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProductos.pending, (state) => {
      state.loading = true;
      state.error = null;
    }).addCase(fetchProductos.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      }).addCase(fetchProductos.rejected, (state, action) => {
        state.loading = false;
        state. error = action.error.message;
      });
  },
});

export default productosSlice.reducer;
