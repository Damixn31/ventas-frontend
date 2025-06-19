import { Router, Routes, Route, Navigate } from "react-router-dom";

import Layout from './components/Layout'; // envuelve todas las rutas
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './routes/ProtectedRoute';
import Productos from './pages/Productos';
import Ventas from './pages/Ventas';

function App() {
return (
      <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<Layout />}>
        <Route path="/dashboard" element={<ProtectedRoute> <Dashboard /> </ProtectedRoute>} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/ventas" element={<Ventas />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Route>
      </Routes>
  )
}

export default App;

