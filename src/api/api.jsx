import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:4000/api',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
});

// inteceptores para menejar errores o agregar headers
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const msg = error.response?.data?.error || 'Error en la solicitud';
    return Promise.reject(new Error(msg));
  }
);
//login
export const loginUser = (data) => api.post('/login', data);
export const logoutUser = () => api.post('/logout');
export const getProfile = () => api.get('/me');
// productos
export const getProductos = () => api.get('/productos');
export const getProducto = (id) => api.get(`/productos/${id}`);
export const createProducto = (data) => api.post('/productos', data);
export const updateProducto = (id, data) => api.put(`productos/${id}`, data);
export const deleteProducto = (id) => api.delete(`/productos/${id}`);

export const getVentas = () => api.get('/ventas');

//Dashboard Charts
export const getGananciaMensual = () => api.get('/ventas/ganancia-mensual?anio=2025');
export const getTopProductos = () => api.get('/ventas/top-productos');
export const getIngresosPorMoneda = () => api.get('/ventas/ingresos-moneda');
export const getVentasPorFormaPago = () => api.get('/ventas/formas-pago');
