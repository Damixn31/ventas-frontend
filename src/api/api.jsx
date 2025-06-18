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

export const loginUser = (data) => api.post('/login', data);
export const logoutUser = () => api.post('/logout');
export const getProfile = () => api.get('/me');
