import { Router, Routes, Route, Navigate } from "react-router-dom";

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './routes/ProtectedRoute';

function App() {
return (
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<ProtectedRoute> <Dashboard /> </ProtectedRoute>} />


        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
  )
}

export default App;

