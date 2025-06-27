
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { logoutUser } from '../api/api';

export default function Sidebar() {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Dark mode: cambia la clase en el <html>
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const handleLogout = async () => {
    try {
      await logoutUser();
      logout();
      navigate('/login');
    } catch (err) {
      console.log("Error al cerrar sesión:", err);
    }
  };

  return (

<div className={`bg-gray-900 text-white h-screen flex flex-col justify-between transition-all duration-300 ${isCollapsed ? 'w-16' : 'w-64'} p-4`}>
  {/* Top: Botones y navegación */}
  <div>
    <div className="flex items-center justify-between mb-4">
      {!isCollapsed && (
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="text-sm bg-gray-700 px-3 py-1 rounded hover:bg-gray-600"
        >
          {isDarkMode ? '☀️ Claro' : '🌙 Oscuro'}
        </button>
      )}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="text-sm bg-gray-700 px-2 py-1 rounded hover:bg-gray-600"
      >
        {isCollapsed ? '→' : '←'}
      </button>
    </div>

    {!isCollapsed && <h2 className="text-xl font-bold mb-6">BrunoCell</h2>}
    <ul className="space-y-4">
      <li><Link to="/dashboard" className="hover:text-gray-400">{isCollapsed ? '🏠' : 'Inicio'}</Link></li>
      <li><Link to="/ventas" className="hover:text-gray-400">{isCollapsed ? '🧾' : 'Ventas'}</Link></li>
      <li><Link to="/productos" className="hover:text-gray-400">{isCollapsed ? '📦' : 'Productos'}</Link></li>
      <li><Link to="#" className="hover:text-gray-400">{isCollapsed ? '⚙️' : 'Config'}</Link></li>
    </ul>
  </div>

  {/* Bottom: Logout */}
  <div className="pt-4 border-t border-gray-700">
    <button
      onClick={handleLogout}
      className="text-sm text-gray-400 hover:text-red-400 transition-colors"
    >
      {isCollapsed ? '🚪' : 'Cerrar sesión'}
    </button>
  </div>
</div>
  );
}
